// vite.config.js
import { sentryVitePlugin } from "file:///C:/Users/Timmy/Desktop/apple_website/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
import { defineConfig } from "file:///C:/Users/Timmy/Desktop/apple_website/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Timmy/Desktop/apple_website/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "sparynx",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "sparynx",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "sparynx",
    project: "javascript-react"
  })],
  build: {
    sourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUaW1teVxcXFxEZXNrdG9wXFxcXGFwcGxlX3dlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFRpbW15XFxcXERlc2t0b3BcXFxcYXBwbGVfd2Vic2l0ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVGltbXkvRGVza3RvcC9hcHBsZV93ZWJzaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgc2VudHJ5Vml0ZVBsdWdpbiB9IGZyb20gXCJAc2VudHJ5L3ZpdGUtcGx1Z2luXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBzZW50cnlWaXRlUGx1Z2luKHtcclxuICAgIG9yZzogXCJzcGFyeW54XCIsXHJcbiAgICBwcm9qZWN0OiBcImphdmFzY3JpcHQtcmVhY3RcIlxyXG4gIH0pLCBzZW50cnlWaXRlUGx1Z2luKHtcclxuICAgIG9yZzogXCJzcGFyeW54XCIsXHJcbiAgICBwcm9qZWN0OiBcImphdmFzY3JpcHQtcmVhY3RcIlxyXG4gIH0pLCBzZW50cnlWaXRlUGx1Z2luKHtcclxuICAgIG9yZzogXCJzcGFyeW54XCIsXHJcbiAgICBwcm9qZWN0OiBcImphdmFzY3JpcHQtcmVhY3RcIlxyXG4gIH0pXSxcclxuXHJcbiAgYnVpbGQ6IHtcclxuICAgIHNvdXJjZW1hcDogdHJ1ZVxyXG4gIH1cclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQXdTLFNBQVMsd0JBQXdCO0FBQ3pVLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGlCQUFpQjtBQUFBLElBQ2xDLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxFQUNYLENBQUMsR0FBRyxpQkFBaUI7QUFBQSxJQUNuQixLQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsRUFDWCxDQUFDLEdBQUcsaUJBQWlCO0FBQUEsSUFDbkIsS0FBSztBQUFBLElBQ0wsU0FBUztBQUFBLEVBQ1gsQ0FBQyxDQUFDO0FBQUEsRUFFRixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==