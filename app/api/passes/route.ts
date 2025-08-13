import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const platformId = searchParams.get('platform_id');

    // Check if Supabase environment variables are configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { success: false, error: 'Supabase configuration not found. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local file.' },
        { status: 500 }
      );
    }

    // Create Supabase client using service role key for server-side access
    const supabase = createServerSupabaseClient();
    
    if (!supabase) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database configuration error', 
          solution: 'Please check your Supabase environment variables in .env.local'
        },
        { status: 500 }
      );
    }



    // Build query based on platform_id parameter
    let query = supabase.from('passes').select('*');
    
    if (platformId) {
      query = query.eq('platform_id', platformId);
    }

    // Fetch passes from Supabase
    const { data, error } = await query.order('created_at', { ascending: true });

    if (error) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to fetch passes from database',
          details: error,
          solution: 'Please check your database permissions and ensure the passes table has the correct structure.'
        },
        { status: 500 }
      );
    }

    // If no data returned from database, return empty array
    if (!data || data.length === 0) {
      return NextResponse.json({
        success: true,
        data: [],
        message: 'No passes found in database. Please add some pass data.'
      });
    }

    return NextResponse.json({
      success: true,
      data: data,
      source: 'database'
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Unexpected error occurred', 
        details: error instanceof Error ? error.message : 'Unknown error',
        solution: 'Please check your database connection and try again.'
      },
      { status: 500 }
    );
  }
}



