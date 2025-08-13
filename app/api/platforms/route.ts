import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
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
    
    // Fetch platforms from Supabase
    const { data, error } = await supabase
      .from('platforms')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to fetch platforms from database', 
          details: error,
          solution: 'Please check your database permissions and ensure the platforms table has the correct structure.'
        },
        { status: 500 }
      );
    }

    // If no data returned from database, return empty array
    if (!data || data.length === 0) {
      return NextResponse.json({
        success: true,
        data: [],
        message: 'No platforms found in database. Please add some platform data.'
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
