<script lang="ts">
    import { Router, Route } from 'svelte-routing';
    import Header from './components/Header.svelte';
    // Routes
    import Home from './routes/Home.svelte';
    import Login from './routes/Login.svelte';
    import NotFound from './routes/NotFound.svelte';

    export let url = '';
</script>

<main>
    <Router {url}>
        <Header />
        <main>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <Home />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </main>
    </Router>
</main>

<style>
</style>
