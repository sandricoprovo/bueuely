<script lang="ts">
    import NavLink from "./Navigation/NavLink.svelte";
    import { NAVIGATION_LINKS } from "../config/navigation.config";

    // TODO: replace with real auth check
    const isAuthenticated = false;
</script>

<header>
    <p>LOGO</p>
    <nav>
        <ul>
            {#each NAVIGATION_LINKS as { hideWhenAuthenticated, showAlways, href, label }}
                {@const showLink = isAuthenticated
                    ? !hideWhenAuthenticated
                    : hideWhenAuthenticated}

                {#if showAlways}
                    <NavLink {href} {label} />
                {:else if showLink}
                    <NavLink {href} {label} />
                {/if}
            {/each}
        </ul>
    </nav>
</header>

<style lang="postcss">
    header {
        border: 2px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-lg) var(--space-lg);
        margin-block-end: var(--space-lg);

        & > nav > ul {
            display: flex;
            gap: var(--space-lg);
        }
    }
</style>
