<script lang="ts">
    import NavBar from "$lib/Navigation/NavBar.svelte";
    import NavMenu from "$lib/Navigation/NavMenu.svelte";
    import { isAuthenticated } from "$stores/auth"

    let screenWidth: number;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<header class="container__padding">
    <p>LOGO</p>
    {#if screenWidth < 640}
        <NavMenu isAuthenticated={$isAuthenticated} />
    {:else}
        <NavBar isAuthenticated={$isAuthenticated} />
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
