<script lang="ts">
    import { enhance } from "$app/forms";
    import type { SubmitFunction } from "@sveltejs/kit";

    const THEMES = ["light", "dark"];

    const submitUpdateTheme: SubmitFunction = ({ action }) => {
        const theme = action.searchParams.get("theme");
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
        }
    };
</script>

<form method="POST" use:enhance={submitUpdateTheme}>
    {#each THEMES as theme}
        <button formaction={`/?/setTheme&theme=${theme}`}>
            {theme}
        </button>
    {/each}
</form>

<style>
</style>
