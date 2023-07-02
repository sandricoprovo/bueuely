<script lang="ts">
    import { NAVIGATION_LINKS } from "$config/navigation.config";
    import Content from "./elements/Content.svelte";
    import MenuButton from "./elements/MenuButton.svelte";
    import NavLink from "./elements/NavLink.svelte";
    import NavList from "./elements/NavList.svelte";
    import NavListItem from "./elements/NavListItem.svelte";

    export let isAuthenticated: boolean;
    let isMenuOpen = false;

    const toggleMenu = () => (isMenuOpen = !isMenuOpen);
</script>

<nav>
    <MenuButton onClick={toggleMenu} label={"Menu"} />
    <div class={isMenuOpen ? "isOpen" : "isClosed"}>
        <NavList>
            {#each NAVIGATION_LINKS as { hideWhenAuthenticated, showAlways, href, label }}
                {@const showLink = isAuthenticated
                    ? !hideWhenAuthenticated
                    : hideWhenAuthenticated}

                {#if showAlways || showLink}
                    <NavListItem>
                        <NavLink {href} {label} />
                    </NavListItem>
                {/if}
            {/each}
        </NavList>
        <Content />
    </div>
</nav>

<style lang="postcss">
    nav {
        position: relative;

        & > div {
            --fade-timing: 375ms;
            --opacity-timing: 200ms;

            position: absolute;
            background-color: var(--clr-container-background);
            min-width: 200px;
            width: 100vw;
            max-width: 500px;
            border-radius: var(--container-br);
            overflow: hidden;
            top: var(--space-xl);
            right: 0;
            z-index: 100;
            box-shadow: var(--shadow-elevation-high);

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: var(--space-lg);

            @media (width <= 640px) {
                max-width: calc(100vw - (var(--space-lg) * 2));
            }
        }
    }

    /* NOTES:
        The menu is hidden by default, and only shown when the menu button is clicked. These two classes are loaded conditionally on the menu container div via it's class prop. The isOpen class opacity has a delay to accommodate a short in fade effect, and the isClosed transition has a delay to accommodate the fade out effect. This switching of the delay gives the opposite effect visually.
    */
    .isOpen {
        opacity: 1;
        transform: translate(0, 0);
        transition: transform var(--fade-timing) var(--easing),
            opacity var(--opacity-timing) var(--easing) 250ms;
    }
    .isClosed {
        opacity: 0;
        transform: translate(0, -100vh);
        transition: transform var(--fade-timing) var(--easing) 85ms,
            opacity var(--opacity-timing) var(--easing);
    }
</style>
