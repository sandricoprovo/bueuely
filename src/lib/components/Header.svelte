<script lang="ts">
    import NavBar from "./Navigation/NavBar.svelte";
    import NavMenu from "./Navigation/NavMenu.svelte";

    const isAuthenticated = false;
    let screenWidth: number;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<header class="container__padding">
    <p>LOGO</p>
    {#if screenWidth < 640}
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
