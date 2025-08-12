// Database utility functions for platforms and passes
// Uses environment variables for database configuration

export interface Platform {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  features: any[];
  offers: any | null;
  created_at: string;
  updated_at: string;
}

export interface Pass {
  id: number;
  platform_id: number;
  name: string;
  description: string;
  price: number;
  duration_days: number;
  image_url: string | null;
  features: any[];
  offers: any | null;
  completed?: boolean;
  created_at: string;
  updated_at: string;
}

// Function to get all platforms
export async function getPlatforms(): Promise<Platform[]> {
  try {
    // Fetch from API endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/platforms`);
    const result = await response.json();
    
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error || 'Failed to fetch platforms');
    }
  } catch (error) {
    console.error('Error fetching platforms:', error);
    throw error;
  }
}

// Function to get passes by platform
export async function getPassesByPlatform(platformId?: number): Promise<Pass[]> {
  try {
    // Fetch from API endpoint
    const url = platformId 
      ? `${process.env.NEXT_PUBLIC_API_URL || '/api'}/passes?platform_id=${platformId}`
      : `${process.env.NEXT_PUBLIC_API_URL || '/api'}/passes`;
      
    const response = await fetch(url);
    const result = await response.json();
    
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error || 'Failed to fetch passes');
    }
  } catch (error) {
    console.error('Error fetching passes:', error);
    throw error;
  }
}

// Function to get a single platform by ID
export async function getPlatformById(id: number): Promise<Platform | null> {
  try {
    const platforms = await getPlatforms();
    return platforms.find(platform => platform.id === id) || null;
  } catch (error) {
    console.error('Error fetching platform by ID:', error);
    return null;
  }
}

// Function to get a single pass by ID
export async function getPassById(id: number): Promise<Pass | null> {
  try {
    const passes = await getPassesByPlatform();
    return passes.find(pass => pass.id === id) || null;
  } catch (error) {
    console.error('Error fetching pass by ID:', error);
    return null;
  }
}
