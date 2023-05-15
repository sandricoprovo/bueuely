import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/schema';

export const createClient = () => createBrowserSupabaseClient<Database>();
