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
        color: var(--clr-primary);
        font-weight: bold;
        font-size: var(--font-size-lg);
        transition: color var(--transition);

        &:hover {
            color: red;
        }
    }
</style>
