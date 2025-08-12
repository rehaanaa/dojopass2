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

export interface Platform {
  id: number;
  title: string;
  name: string;
  description: string;
  image_url: string | null;
  features: any[];
  created_at: string;
  updated_at: string;
}

export interface Feature {
  id?: number;
  name?: string;
  text?: string;
  title?: string;
  description?: string;
  icon?: string;
}

export interface UserPass {
  id: number;
  platform_id: number;
  name: string;
  description: string;
  price: number;
  payment_amount?: number;
  duration_days: number;
  image_url: string | null;
  features: Feature[];
  offers: any | null;
  completed?: boolean;
  created_at: string;
  updated_at: string;
}
