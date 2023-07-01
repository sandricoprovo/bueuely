<script lang="ts">
    import NavBar from "./Navigation/NavBar.svelte";
    import NavMenu from "./Navigation/NavMenu.svelte";

    // TODO: replace with real auth check
    const isAuthenticated = false;
    const isMobile = false;
</script>

<header class="container__padding">
    <p>LOGO</p>
    {#if isMobile}
        <NavMenu {isAuthenticated} />
    {:else}
        <NavBar {isAuthenticated} />
    {/if}
</header>

<style lang="postcss">
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-lg) var(--space-lg);
        margin-block-end: var(--space-lg);
        transition: padding var(--transition);
    }
</style>
