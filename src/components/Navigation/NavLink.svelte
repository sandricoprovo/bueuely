<script lang="ts">
    export let href: string;
    export let label: string;
</script>

<a {href}>
    <slot>{label}</slot>
</a>

<style lang="postcss">
</style>
