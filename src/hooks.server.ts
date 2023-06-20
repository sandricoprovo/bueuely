import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
    let theme: string | null = null;
    const newTheme = event.url.searchParams.get("theme");
    const cookieTheme = event.cookies.get("colortheme");

    // Sets theme with priority given to newTheme if it exists
    if (newTheme) {
        theme = newTheme;
    } else if (cookieTheme) {
        theme = cookieTheme;
    }

    // Updates the data theme on the html tag
    if (theme) {
        return await resolve(event, {
            transformPageChunk: ({ html }) =>
                html.replace('data-theme=""', `data-theme="${theme}"`),
        });
    }

    return await resolve(event);
}) satisfies Handle;
