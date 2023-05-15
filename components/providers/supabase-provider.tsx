'use client';

import { createClient } from '@/utils/supabase-browser';
import { createContext, useContext, useState } from 'react';

import type { Database } from '@/lib/schema';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';

type SupabaseContext = {
    supabase: SupabaseClient<Database>;
};
type SupabaseProviderProps = {
    children: React.ReactNode;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({ children }: SupabaseProviderProps) {
    const [supabase] = useState(() => createClient());

    return <Context.Provider value={{ supabase }}>{children}</Context.Provider>;
}

export function useSupabase() {
    let context = useContext(Context);
    if (context === undefined) {
        throw new Error('useSupabase must be used within a SupabaseProvider');
    } else {
        return context;
    }
}
