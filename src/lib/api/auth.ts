import { supabase } from '../supabase';
import type { SignUpData, LoginData } from '../types/auth';

export const auth = {
  async signUp({ email, password, name }: SignUpData) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }, // This will be available in raw_user_meta_data
      },
    });
    
    if (error) throw error;
    return data;
  },

  async login({ email, password }: LoginData) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    return data;
  },

  async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    
    if (error) throw error;
  },
};