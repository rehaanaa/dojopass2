import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get('user_id');

    if (!user_id) {
      return NextResponse.json({ success: false, error: 'User ID parameter is required' }, { status: 400 });
    }

    // Create Supabase client
    const supabase = createServerSupabaseClient();
    
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database configuration error' },
        { status: 500 }
      );
    }

    // Check if user_purchased table exists and has data
    const { data: tableCheck, error: tableError } = await supabase
      .from('user_purchased')
      .select('count')
      .limit(1);

    if (tableError) {
      return NextResponse.json({ 
        success: false, 
        error: 'Table access error', 
        details: tableError.message,
        code: tableError.code
      }, { status: 500 });
    }

    // Get total count of user_purchased records
    const { count, error: countError } = await supabase
      .from('user_purchased')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      return NextResponse.json({ 
        success: false, 
        error: 'Count error', 
        details: countError.message 
      }, { status: 500 });
    }

    // Get user's purchased passes
    const { data: userPasses, error: userError } = await supabase
      .from('user_purchased')
      .select('*')
      .eq('user_id', user_id);

    if (userError) {
      return NextResponse.json({ 
        success: false, 
        error: 'User passes fetch error', 
        details: userError.message 
      }, { status: 500 });
    }

    // Get user info
    const { data: userInfo, error: userInfoError } = await supabase
      .from('dojo_users')
      .select('*')
      .eq('id', user_id)
      .single();

    return NextResponse.json({
      success: true,
      data: {
        tableExists: true,
        totalRecords: count,
        userPasses: userPasses || [],
        userInfo: userInfo || null,
        userPassesCount: userPasses?.length || 0
      }
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
