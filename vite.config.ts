import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
        plugins: [sveltekit()],
        test: {
                environment: 'jsdom',
                globals: true,
                setupFiles: ['./vitest.setup.ts']
        },
        resolve: {
                conditions: ['browser', 'development']
        }
});
