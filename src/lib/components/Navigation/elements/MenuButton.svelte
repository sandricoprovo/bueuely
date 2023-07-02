<script lang="ts">
    export let label: string;
    export let onClick: () => void;
</script>

<button on:click={onClick}>{label}</button>

<style lang="postcss">
    button {
        background-color: transparent;
        cursor: pointer;
        border: none;
        padding: var(--btn-padding);
        padding-inline-end: 0;
        border: none;
        font-size: var(--fs-400);
        border-radius: var(--btn-radius);
    }
</style>
