import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
	base: "/jcash-fillout-navigation-bar/",
	plugins: [react(), tailwindcss(),
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src'),
		},
	},
})
