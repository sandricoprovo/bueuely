import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { Database } from '@/lib/schema';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = ['/login', '/signup', '/'];

// Handles updating the user session data via supabase whenever a user changes routes.
export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const pathname = req.nextUrl.pathname;

    const supabase = createMiddlewareSupabaseClient<Database>({ req, res });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session && !PUBLIC_PATHS.includes(pathname)) {
        const url = new URL(req.url);
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return res;
}
