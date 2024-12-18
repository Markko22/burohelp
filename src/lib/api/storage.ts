import { supabase } from '../supabase';
import { STORAGE } from '@/config/constants';

export async function getSignedUrl(filePath: string, expiresIn: number = STORAGE.DEFAULT_SIGNED_URL_EXPIRY): Promise<string> {
  const { data, error } = await supabase.storage
    .from(STORAGE.BUCKETS.PDF)
    .createSignedUrl(filePath, expiresIn);

  if (error) throw error;
  if (!data.signedUrl) throw new Error('Failed to generate signed URL');

  return data.signedUrl;
}