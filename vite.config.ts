import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

export default defineConfig(
  {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        targets: browserslistToTargets(browserslist('>= 0.25%')),
        cssModules: true
      }
    },
    build: {
      cssMinify: 'lightningcss'
    },
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  }
);
