-- First, enable RLS on the storage.objects table if not already enabled
alter table storage.objects enable row level security;

-- Drop existing policies if they exist
drop policy if exists "Allow authenticated users to upload PDFs" on storage.objects;
drop policy if exists "Allow users to read their own PDFs" on storage.objects;
drop policy if exists "Allow users to update their own PDFs" on storage.objects;
drop policy if exists "Allow users to delete their own PDFs" on storage.objects;

-- Create new policies with user-specific folders
create policy "Allow authenticated users to upload PDFs"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'pdfs' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Allow users to read their own PDFs"
on storage.objects for select
to authenticated
using (
  bucket_id = 'pdfs' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Allow users to update their own PDFs"
on storage.objects for update
to authenticated
using (
  bucket_id = 'pdfs' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Allow users to delete their own PDFs"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'pdfs' AND
  (storage.foldername(name))[1] = auth.uid()::text
);