import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const platformId = searchParams.get('platform_id');

    // Check if Supabase environment variables are configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { success: false, error: 'Supabase configuration not found' },
        { status: 500 }
      );
    }

    // Create Supabase client using service role key for server-side access
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Build query based on platform_id parameter
    let query = supabase.from('passes').select('*');
    
    if (platformId) {
      query = query.eq('platform_id', platformId);
    }

    // Fetch passes from Supabase
    const { data, error } = await query.order('created_at', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch passes from database' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data || []
    });
  } catch (error) {
    console.error('Error fetching passes:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch passes from database' },
      { status: 500 }
    );
  }
}



