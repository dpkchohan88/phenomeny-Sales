import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uhfzyehcokdlvdpqloky.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoZnp5ZWhjb2tkbHZkcHFsb2t5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NjU0ODUsImV4cCI6MjA4MzQ0MTQ4NX0.uNnpS1PVS3zowrNJuzlCbXY8YpOV22MSTyPnUxuNkKI';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
