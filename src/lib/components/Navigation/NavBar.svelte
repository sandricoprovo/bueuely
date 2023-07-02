<script lang="ts">
    import { NAVIGATION_LINKS } from "$config/navigation.config";
    import NavLink from "./elements/NavLink.svelte";

    export let isAuthenticated: boolean;
</script>

<nav>
    <ul>
        {#each NAVIGATION_LINKS as { hideWhenAuthenticated, showAlways, href, label }}
            {@const showLink = isAuthenticated
                ? !hideWhenAuthenticated
                : hideWhenAuthenticated}

            {#if showAlways || showLink}
                <NavLink {href} {label} />
            {/if}
        {/each}
    </ul>
</nav>

<style style="postcss">
    nav {
        display: flex;
        align-items: center;

        & > ul {
            display: flex;
            gap: var(--space-lg);
        }
    }
</style>
