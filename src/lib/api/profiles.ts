import { supabase } from '../supabase';
import type { Profile } from '../types/auth';

export async function createProfile(profile: Omit<Profile, 'created_at' | 'updated_at'>): Promise<void> {
  const { error } = await supabase
    .from('profiles')
    .insert([profile]);

  if (error) throw error;
}