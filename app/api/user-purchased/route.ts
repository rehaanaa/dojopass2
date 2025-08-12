import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({ success: false, error: 'Supabase configuration not found' }, { status: 500 });
    }
    
    // Use service role key for API routes to bypass RLS
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    const body = await request.json();
    const { user_id, pass_id, platform_id, pass_name, price, duration_days } = body;

    if (!user_id || !pass_id || !platform_id || !pass_name || !price || !duration_days) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Calculate expiry date
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + duration_days);

    // Insert into user_purchased table
    const { data, error } = await supabase
      .from('user_purchased')
      .insert({
        user_id,
        platform_id,
        pass_id,
        pass_name,
        price,
        duration_days,
        status: 'active',
        expiry_date: expiryDate.toISOString()
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      if (error.code === '23505') { 
        return NextResponse.json({ success: false, error: 'Duplicate purchase detected' }, { status: 409 }); 
      }
      else if (error.code === '23503') { 
        return NextResponse.json({ success: false, error: 'Invalid reference - user, platform, or pass not found' }, { status: 400 }); 
      }
      else { 
        return NextResponse.json({ success: false, error: 'Failed to save pass to database' }, { status: 500 }); 
      }
    }
    
    console.log('User pass purchased successfully:', data);
    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    console.error('Error saving user pass:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({ success: false, error: 'Supabase configuration not found' }, { status: 500 });
    }
    
    // Use service role key for API routes to bypass RLS
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get('user_id');

    if (!user_id) {
      return NextResponse.json({ success: false, error: 'User ID parameter is required' }, { status: 400 });
    }

    // Fetch user purchased passes with platform and pass details
    const { data, error } = await supabase
      .from('user_purchased')
      .select(`
        *,
        platforms:platform_id(title, name, image_url),
        passes:pass_id(name, description, image_url)
      `)
      .eq('user_id', user_id)
      .order('purchase_date', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ success: false, error: 'Failed to fetch user passes' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: data || []
    });

  } catch (error) {
    console.error('Error fetching user passes:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
