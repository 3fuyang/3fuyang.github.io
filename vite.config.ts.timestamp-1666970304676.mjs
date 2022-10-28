// vite.config.ts
import { defineConfig } from "file:///D:/github/flog/node_modules/vite/dist/node/index.js";
import mdx from "file:///D:/github/flog/node_modules/@mdx-js/rollup/index.js";
import react from "file:///D:/github/flog/node_modules/@vitejs/plugin-react/dist/index.mjs";
import Unocss from "file:///D:/github/flog/node_modules/unocss/dist/vite.mjs";
import { VitePWA } from "file:///D:/github/flog/node_modules/vite-plugin-pwa/dist/index.mjs";
import { visualizer } from "file:///D:/github/flog/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import rehypeHighlight from "file:///D:/github/flog/node_modules/rehype-highlight/index.js";
import remarkGfm from "file:///D:/github/flog/node_modules/remark-gfm/index.js";
import rehypeSlug from "file:///D:/github/flog/node_modules/rehype-slug/index.js";
import rehypeToc from "file:///D:/github/flog/node_modules/rehype-toc/index.js";
import a11yEmoji from "file:///D:/github/flog/node_modules/@fec/remark-a11y-emoji/dist/remark-a11y-emoji.cjs.js";
import remarkFrontmatter from "file:///D:/github/flog/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///D:/github/flog/node_modules/remark-mdx-frontmatter/index.js";
var vite_config_default = defineConfig({
  build: {
    target: "esnext"
  },
  plugins: [
    Unocss({
      configFile: "uno.config.ts"
    }),
    react(),
    mdx({
      remarkPlugins: [
        remarkGfm,
        a11yEmoji,
        remarkFrontmatter,
        remarkMdxFrontmatter
      ],
      rehypePlugins: [
        rehypeHighlight,
        rehypeSlug,
        rehypeToc
      ]
    }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      includeAssets: ["fwio.svg", "seagull.svg", "fwio-apple-touch.png", "images/**/*.jpg", "images/**/*.webp", "images/**/*.avif"],
      manifest: {
        name: "Flog",
        short_name: "Flog",
        description: "Fwio's personal blog",
        theme_color: "#ffffff",
        icons: [
          {
            src: "fwio-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "fwio-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "fwio-maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 3e6
      }
    }),
    visualizer({
      filename: "bundle-stats.html"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxnaXRodWJcXFxcZmxvZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZ2l0aHViXFxcXGZsb2dcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2dpdGh1Yi9mbG9nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IG1keCBmcm9tICdAbWR4LWpzL3JvbGx1cCdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xyXG5cclxuLy8gTURYIHBsdWdpbnNcclxuaW1wb3J0IHJlaHlwZUhpZ2hsaWdodCBmcm9tICdyZWh5cGUtaGlnaGxpZ2h0J1xyXG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gJ3JlbWFyay1nZm0nXHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gJ3JlaHlwZS1zbHVnJ1xyXG5pbXBvcnQgcmVoeXBlVG9jIGZyb20gJ3JlaHlwZS10b2MnXHJcbmltcG9ydCBhMTF5RW1vamkgZnJvbSAnQGZlYy9yZW1hcmstYTExeS1lbW9qaSdcclxuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gJ3JlbWFyay1mcm9udG1hdHRlcidcclxuaW1wb3J0IHJlbWFya01keEZyb250bWF0dGVyIGZyb20gJ3JlbWFyay1tZHgtZnJvbnRtYXR0ZXInXHJcblxyXG4vKiAvLyBpbmxpbmUgcGx1Z2luXHJcbmZ1bmN0aW9uIFZpdGVQbHVnaW5SZWFjdEF1dG9Sb3V0ZXMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi1yZWFjdC1hdXRvLXJvdXRlcycsXHJcbiAgICByZXNvbHZlSWQoKSB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufSAqL1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgdGFyZ2V0OiAnZXNuZXh0J1xyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgLy8gV2hlbiB1c2luZyBwcmVzZXQtYXR0cmlidXRpZnksIG1ha2Ugc3VyZSBVbm9Dc3MgaXMgYWhlYWQgb2YgcmVhY3QgaW4gdGhlIHZpdGUgcGx1Z2lucy5cclxuICAgIFVub2Nzcyh7XHJcbiAgICAgIGNvbmZpZ0ZpbGU6ICd1bm8uY29uZmlnLnRzJ1xyXG4gICAgfSksXHJcbiAgICByZWFjdCgpLFxyXG4gICAgbWR4KHtcclxuICAgICAgcmVtYXJrUGx1Z2luczogW1xyXG4gICAgICAgIC8vIGFkZCBHaXRodWIgZmxhdm9yZWQgbWFya2Rvd24oR0ZNKSBGZWF0dXJlXHJcbiAgICAgICAgcmVtYXJrR2ZtLFxyXG4gICAgICAgIC8vIG1ha2UgdGhlIGVtb2ppcyBhY2Nlc3NpYmxlIHZpYSBhcmlhLWF0dHJzXHJcbiAgICAgICAgYTExeUVtb2ppLFxyXG4gICAgICAgIC8vIGZyb250bWF0dGVyXHJcbiAgICAgICAgcmVtYXJrRnJvbnRtYXR0ZXIsIHJlbWFya01keEZyb250bWF0dGVyXHJcbiAgICAgIF0sXHJcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtcclxuICAgICAgICAvLyBhZGQgc3ludGF4IGhpZ2hsaWdodGluZyB0byBtZHhcclxuICAgICAgICByZWh5cGVIaWdobGlnaHQsXHJcbiAgICAgICAgLy8gYWRkIGBpZGAgYXR0cnMgdG8gaGVhZGluZ3NcclxuICAgICAgICByZWh5cGVTbHVnLFxyXG4gICAgICAgIC8vIGFkZCBUYWJsZSBvZiBDb250ZW50cyhUT0MpXHJcbiAgICAgICAgcmVoeXBlVG9jXHJcbiAgICAgIF1cclxuICAgIH0pLFxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxyXG4gICAgICBkZXZPcHRpb25zOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Z3aW8uc3ZnJywgJ3NlYWd1bGwuc3ZnJywgJ2Z3aW8tYXBwbGUtdG91Y2gucG5nJywgJ2ltYWdlcy8qKi8qLmpwZycsICdpbWFnZXMvKiovKi53ZWJwJywgJ2ltYWdlcy8qKi8qLmF2aWYnXSxcclxuICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICBuYW1lOiAnRmxvZycsXHJcbiAgICAgICAgc2hvcnRfbmFtZTogJ0Zsb2cnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRndpb1xcJ3MgcGVyc29uYWwgYmxvZycsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAvLyBhbGwgaWNvbnMgb24gUFdBIFdlYiBBcHAgTWFuaWZlc3Qgb3B0aW9uXHJcbiAgICAgICAgLy8gd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgc2VydmljZSB3b3JrZXIgcHJlY2FjaGVcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdmd2lvLTE5MngxOTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJ2Z3aW8tNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnZndpby1tYXNrYWJsZS1pY29uLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgbWF4aW11bUZpbGVTaXplVG9DYWNoZUluQnl0ZXM6IDNlNlxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIC8vIGJ1bmRsZSB2aXN1YWxpemVyIChtYWtlIHN1cmUgaXQgdGhlIGxhc3QgcGx1Z2luKVxyXG4gICAgdmlzdWFsaXplcih7XHJcbiAgICAgIGZpbGVuYW1lOiAnYnVuZGxlLXN0YXRzLmh0bWwnXHJcbiAgICB9KVxyXG4gIF1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrTyxTQUFTLG9CQUFvQjtBQUMvUCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixTQUFTLGVBQWU7QUFDeEIsU0FBUyxrQkFBa0I7QUFHM0IsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZUFBZTtBQUN0QixPQUFPLGVBQWU7QUFDdEIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTywwQkFBMEI7QUFhakMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUVQLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxJQUNkLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLGVBQWU7QUFBQSxRQUViO0FBQUEsUUFFQTtBQUFBLFFBRUE7QUFBQSxRQUFtQjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFFYjtBQUFBLFFBRUE7QUFBQSxRQUVBO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLGVBQWUsQ0FBQyxZQUFZLGVBQWUsd0JBQXdCLG1CQUFtQixvQkFBb0Isa0JBQWtCO0FBQUEsTUFDNUgsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBR2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCwrQkFBK0I7QUFBQSxNQUNqQztBQUFBLElBQ0YsQ0FBQztBQUFBLElBRUQsV0FBVztBQUFBLE1BQ1QsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
