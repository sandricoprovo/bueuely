<script lang="ts">
    import type { SubmitFunction } from "@sveltejs/kit";
    import { enhance } from "$app/forms";
    import { THEMES } from "../constants/themes";
    import { uppercaseFirstLetter } from "../utils/uppercaseFirstLetter";

    let showThemeToggle: boolean = false;
    let currTheme: string = uppercaseFirstLetter("Light");

    const submitUpdateTheme: SubmitFunction = ({ action }) => {
        const theme = action.searchParams.get("theme");
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
            currTheme = uppercaseFirstLetter(theme);
        }
        showThemeToggle = false;
    };
</script>

<form method="POST" use:enhance={submitUpdateTheme}>
    <!-- TODO: Add up/down arrow icon here -->
    <button
        on:click|preventDefault={() => (showThemeToggle = !showThemeToggle)}
    >
        {currTheme}
    </button>
    <ul>
        {#if showThemeToggle}
            {#each THEMES as theme}
                <li>
                    <button formaction={`/?/setTheme&theme=${theme}`}>
                        {uppercaseFirstLetter(theme)}
                    </button>
                </li>
            {/each}
        {/if}
    </ul>
</form>

<style lang="postcss">
    form {
        position: relative;

        & button {
            cursor: pointer;
            border: none;
            padding: var(--btn-padding);
            border: none;
            font-size: var(--fs-400);
            border-radius: var(--btn-radius);
        }

        & > button:first-child {
            background-color: transparent;
        }

        & > ul {
            width: 100%;
            border-radius: var(--btn-radius);
            overflow: hidden;
            background-color: var(--clr-btn-hover);
            position: absolute;
            top: 40px;
            left: 0;

            & > li {
                width: 100%;
                background-color: var(--clr-btn-hover);

                & > button {
                    width: 100%;
                    border-radius: 0;

                    &:hover {
                        background-color: var(--clr-btn-list-hover);
                    }
                }
            }
        }
    }
</style>
