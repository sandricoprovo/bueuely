'use client';

import { createContext, useContext, useEffect } from 'react';
import useSWR from 'swr';
import { Session } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { useSupabase } from './supabase-provider';

type IContext = {
    user: null | undefined; // TODO: get user from profile
    error: any;
    isLoading: boolean;
    mutate: any;
    signOut: () => Promise<void>;
    signInWithEmail: (email: string, password: string) => Promise<void | null>;
};
type SupabaseAuthProviderProps = {
    serverSession: Session | null | undefined;
    children: React.ReactNode;
};

const Context = createContext<IContext>({} as IContext);

export default function SupabaseAuthProvider({
    serverSession,
    children,
}: SupabaseAuthProviderProps) {
    const { supabase } = useSupabase();
    const router = useRouter();

    // Fetches the user data
    async function getUser() {
        const { data: user, error } = await supabase.auth.getUser();

        if (error) throw error;
        return user;
    }

    const {
        data: user,
        error,
        mutate,
        isLoading,
    } = useSWR(serverSession ? 'profile-context' : null, getUser);

    // Handles signing out the user
    async function signOut() {
        await supabase.auth.signOut();
        router.push('/login');
    }

    // Handles signing in with email
    async function signInWithEmail(email: string, password: string) {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) throw error;
        return null; // NOTE: might want to return something more useful
    }

    // Refreshes page to sync server state and client state
    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.access_token !== serverSession?.access_token) {
                router.refresh();
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [router, supabase, serverSession?.access_token]);

    const values: IContext = {
        user,
        error,
        isLoading,
        mutate,
        signOut,
        signInWithEmail,
    };

    return <Context.Provider value={values}>{children}</Context.Provider>;
}

export const useAuth = () => {
    let context = useContext(Context);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    } else {
        return context;
    }
};
