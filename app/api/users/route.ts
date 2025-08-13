import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

// GET - Get user by email
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
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({
        error: 'Email parameter is required'
      }, { status: 400 });
    }



    // Get user by email
    const { data: user, error } = await supabase
      .from('dojo_users')
      .select('*')
      .eq('email', email)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({
          success: false,
          error: 'User not found',
          code: 'USER_NOT_FOUND'
        }, { status: 404 });
      }
      
      return NextResponse.json({
        success: false,
        error: 'Database error',
        details: error
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: user
    });

  } catch (error) {
    return NextResponse.json(
      { 
        success: false,
        error: 'Internal server error',
        details: error 
      },
      { status: 500 }
    );
  }
}

// POST - Create or update user
export async function POST(request: NextRequest) {
  try {
    // Create Supabase client using service role key
    const supabase = createServerSupabaseClient();
    
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database configuration error' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({
        error: 'Email is required'
      }, { status: 400 });
    }



    // Check if user already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('dojo_users')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError) {
      if (fetchError.code === 'PGRST116') {
        // User doesn't exist, create new user
        
        // Generate dojo_id with format: DOJOPS + 4 random digits
        const randomDigits = Math.floor(1000 + Math.random() * 9000); // 1000-9999
        const dojoId = `DOJOPS${randomDigits}`;
        
        const userProfile = {
          email: email,
          dojo_id: dojoId,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        const { data: newUser, error: insertError } = await supabase
          .from('dojo_users')
          .insert(userProfile)
          .select()
          .single();

        if (insertError) {
          return NextResponse.json({
            success: false,
            error: 'Error creating user',
            details: insertError
          }, { status: 500 });
        }
        return NextResponse.json({
          success: true,
          data: newUser,
          action: 'created'
        });
      } else {
        // Other database error
        return NextResponse.json({
          success: false,
          error: 'Error fetching user',
          details: fetchError
        }, { status: 500 });
      }
    }

    // User exists, update timestamp and return existing user
    const { error: updateError } = await supabase
      .from('dojo_users')
      .update({ updated_at: new Date().toISOString() })
      .eq('email', email);
      
    if (updateError) {
      // Continue anyway - the user data is still valid
    }
    
    return NextResponse.json({
      success: true,
      data: existingUser,
      action: 'updated'
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
