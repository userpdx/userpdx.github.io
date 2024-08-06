import { fileURLToPath, URL } from 'node:url';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import AutoImport from 'unplugin-auto-import/vite';
import { createSvg } from './plugin/icon';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	envDir: './env',
	base: '/demo2/',
	server: {
		host: '0.0.0.0',
		open: false,
		port: 8080,
	},
	build: {
		rollupOptions: {
			input: {
				index: resolve(__dirname, './index.html'),
			},
		},
	},
	plugins: [
		vue(),
		viteCompression({
			filter: /.(js|json|css)$/i,
		}),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		createSvg('./src/assets/icons/'),
		legacy({
			targets: ['chrome < 68'],
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
