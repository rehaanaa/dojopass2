export interface DojoUser {
  id?: string;
  email: string;
  created_at?: string;
  updated_at?: string;
  // Add other user fields as needed
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  action?: 'created' | 'updated' | 'fetched';
}

// Create or update a user using the API route
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
    
    if (result.success) {
      return { 
        success: true, 
        data: result.data, 
        action: result.action 
      };
    } else {
      return { success: false, error: result.error || 'Failed to create/update user' };
    }
  } catch (error) {
    console.error('Unexpected error in createOrUpdateUser:', error);
    return { success: false, error: 'Network error occurred' };
  }
}

// Get user by email using the API route
export async function getUserByEmail(email: string): Promise<ApiResponse<DojoUser>> {
  try {
    const response = await fetch(`/api/users?email=${encodeURIComponent(email)}`);
    const result = await response.json();
    
    if (result.success) {
      return { 
        success: true, 
        data: result.data, 
        action: 'fetched' 
      };
    } else {
      if (result.error === 'User not found') {
        return { success: true, data: undefined };
      }
      return { success: false, error: result.error || 'Failed to fetch user' };
    }
  } catch (error) {
    console.error('Unexpected error in getUserByEmail:', error);
    return { success: false, error: 'Network error occurred' };
  }
}
