import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: NextRequest) {
  try {
    console.log('Platforms API: Starting request...');
    
    // Check if Supabase environment variables are configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Platforms API: Supabase environment variables missing');
      return NextResponse.json(
        { success: false, error: 'Supabase configuration not found' },
        { status: 500 }
      );
    }

    console.log('Platforms API: Environment variables found');
    console.log('Platforms API: Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing');
    console.log('Platforms API: Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing');

    // Create Supabase client using environment variables
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    
    console.log('Platforms API: Supabase client created');

    console.log('Platforms API: Querying platforms table...');
    
    // Fetch platforms from Supabase
    const { data, error } = await supabase
      .from('platforms')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Platforms API: Supabase error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch platforms from database' },
        { status: 500 }
      );
    }
    
    console.log('Platforms API: Query successful, found', data?.length || 0, 'platforms');

    return NextResponse.json({
      success: true,
      data: data || []
    });
  } catch (error) {
    console.error('Error fetching platforms:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch platforms from database' },
      { status: 500 }
    );
  }
}
