import { supabase } from '../supabase';
import { STORAGE } from '@/config/constants';

function generateFilePath(userId: string, fileName: string): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(7);
  const fileExt = fileName.split('.').pop();
  return `${userId}/${timestamp}-${randomString}.${fileExt}`;
}

export async function uploadPDF(file: File) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const filePath = generateFilePath(user.id, file.name);

  const { error: uploadError, data } = await supabase.storage
    .from(STORAGE.BUCKETS.PDF)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (uploadError) throw uploadError;
  return data;
}