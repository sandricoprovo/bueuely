<script lang="ts">
    export let href: string;
    export let label: string;
</script>

<a {href}>
    <slot>{label}</slot>
</a>

<style lang="postcss">
    a {
        text-decoration: none;
        font-size: var(--fs-400);
        transition: color var(--transition);
    }
</style>
