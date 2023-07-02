import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
        postcss: true,
        typescript: true,
    }),
    kit: {
        csrf: {
            checkOrigin: process.env.NODE_ENV === 'production' ? true : false
        },
        adapter: adapter(),
        alias: {
            $config: './src/config',
            $stores: './src/stores',
            $db: './src/db',
        }
    },
};

export default config;
