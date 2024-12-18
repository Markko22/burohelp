-- Create a new storage bucket for PDFs
insert into storage.buckets (id, name, public)
values ('pdfs', 'pdfs', false);

-- Allow authenticated users to upload PDFs
create policy "Allow authenticated users to upload PDFs"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'pdfs' 
  and (storage.foldername(name))[1] != 'protected'
);

-- Allow users to read their own uploaded PDFs
create policy "Allow users to read their own PDFs"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'pdfs'
  and auth.uid() = owner
);

-- Allow users to update their own PDFs
create policy "Allow users to update their own PDFs"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'pdfs'
  and auth.uid() = owner
);

-- Allow users to delete their own PDFs
create policy "Allow users to delete their own PDFs"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'pdfs'
  and auth.uid() = owner
);