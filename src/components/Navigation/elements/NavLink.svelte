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
        cursor: pointer;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: var(--clr-text);
            opacity: 0;
            transition: opacity var(--transition), bottom var(--transition);
        }

        @media supports (hover: hover) {
            &:hover::after {
                opacity: 1;
                bottom: -8px;
            }
        }
    }
</style>
