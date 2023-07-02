<script lang="ts">
    import "../styles/reset.css";
    import "../styles/fonts.css";
    import "../styles/global.css";
    import Header from "$lib/components/Header.svelte";
</script>

<Header />
<slot />

<style lang="postcss">
    :global(*) {
        color: var(--clr-text);
    }
</style>
