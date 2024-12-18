export interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface Profile {
  id: string;
  name: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}