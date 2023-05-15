import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';

import { Database } from '@/lib/schema';

export const createClient = () =>
    createServerComponentSupabaseClient<Database>({
        headers,
        cookies,
    });
