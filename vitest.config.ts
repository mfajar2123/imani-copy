// import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import { defineVitestConfig } from '@nuxt/test-utils/config';

// export default defineConfig({
//     plugins: [Vue()],
//     test: {
//         globals: true,
//     },
// })

export default defineVitestConfig({
    test: {
        environment: 'nuxt'
    }
})