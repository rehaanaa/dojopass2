// API utility functions to replace direct Supabase calls

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  details?: any;
  action?: string;
}

export interface DojoUser {
  id: string;
  email: string;
  dojo_id: string;
  created_at: string;
  updated_at: string;
}

// Get user by email (fetch existing users)
export async function getUserByEmail(email: string): Promise<ApiResponse<DojoUser>> {
  try {
    const response = await fetch(`/api/users?email=${encodeURIComponent(email)}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      error: 'Network error',
      details: error
    };
  }
}

// Create or update user (for new users and existing users)
export async function createOrUpdateUser(email: string): Promise<ApiResponse<DojoUser>> {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      error: 'Network error',
      details: error
    };
  }
}
