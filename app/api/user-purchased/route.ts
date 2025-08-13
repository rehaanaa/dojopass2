import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    // Create Supabase client using service role key
    const supabase = createServerSupabaseClient();
    
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database configuration error - missing Supabase credentials' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { user_id, pass_id, platform_id, price, duration_days, transaction_id } = body;

    if (!user_id || !pass_id || !platform_id || !price || !duration_days || !transaction_id) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Additional validation for transaction_id
    if (typeof transaction_id !== 'string' || transaction_id.trim() === '') {
      return NextResponse.json({ success: false, error: 'Invalid transaction ID' }, { status: 400 });
    }

    // Calculate expiry date
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + duration_days);

    const insertData = {
      user_id,
      platform_id,
      pass_id,
      amount_paid: price,
      currency: 'INR',
      payment_method: 'UPI',
      payment_status: 'completed',
      purchase_date: new Date().toISOString(),
      expires_at: expiryDate.toISOString(),
      transaction_id: transaction_id
    };

    // Insert into user_purchased table
    const { data, error } = await supabase
      .from('user_purchased')
      .insert(insertData)
      .select()
      .single();

    if (error) {
      if (error.code === '23505') { 
        return NextResponse.json({ success: false, error: 'Duplicate purchase detected' }, { status: 409 }); 
      }
      else if (error.code === '23503') { 
        return NextResponse.json({ success: false, error: 'Invalid reference - user, platform, or pass not found' }, { status: 400 }); 
      }
      else if (error.code === '23502') {
        return NextResponse.json({ success: false, error: `Missing required field: ${error.details}` }, { status: 400 });
      }
      else { 
        return NextResponse.json({ success: false, error: `Database error: ${error.message}` }, { status: 500 }); 
      }
    }
    
    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // Create Supabase client using service role key
    const supabase = createServerSupabaseClient();
    
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database configuration error' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get('user_id');

    if (!user_id) {
      return NextResponse.json({ success: false, error: 'User ID parameter is required' }, { status: 400 });
    }

    // Fetch user purchased passes with platform and pass details
    const { data, error } = await supabase
      .from('user_purchased')
      .select(`
        id,
        user_id,
        pass_id,
        platform_id,
        amount_paid,
        currency,
        payment_status,
        purchase_date,
        expires_at,
        is_active,
        created_at,
        updated_at,
        platforms:platform_id(title),
        passes:pass_id(title, price)
      `)
      .eq('user_id', user_id)
      .order('purchase_date', { ascending: false });

    if (error) {
      // Log error for debugging but don't expose details to client
      console.error('Database error fetching user passes:', error);
      return NextResponse.json({ success: false, error: 'Failed to fetch user passes' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: data || []
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
