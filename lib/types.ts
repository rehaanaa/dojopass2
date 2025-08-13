export interface Platform {
  id: number;
  title: string;
  subtitle?: string;
  icon: string;
  description: string;
  features: Feature[];
  offers?: Offer[];
  image?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Pass {
  id: number;
  platform_id: number;
  title: string;
  subtitle?: string;
  description: string;
  price: number;
  original_price?: number;
  currency: string;
  duration_days?: number;
  features: Feature[];
  offers?: Offer[];
  image?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Feature {
  icon: string;
  text: string;
}

export interface Offer {
  icon: string;
  text: string;
  type?: 'discount' | 'bonus' | 'limited';
}

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
