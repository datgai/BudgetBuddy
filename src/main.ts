// src/main.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ihiyzkhbmnwmirtcmbva.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloaXl6a2hibW53bWlydGNtYnZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMTI5NzUsImV4cCI6MjAyNzg4ODk3NX0.lQlx5tGKS-MDd5JKj-mKAMs9QubomfkRHxhv2fU_4TE';
console.log(supabaseUrl, supabaseKey)
export const supabase = createClient(supabaseUrl, supabaseKey);

