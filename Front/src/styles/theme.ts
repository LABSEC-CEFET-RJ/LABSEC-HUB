import { defaultConfig, defineConfig, createSystem } from "@chakra-ui/react";
import { slotRecipes } from "./recipes";
import { recipes } from "./recipes";

const themeConfig = defineConfig({
  theme: {
    breakpoints: {
      xs: "280px",
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    tokens: {
      colors: {
        primary: {
          50: { value: "#E7ECF0" },
          100: { value: "#C3D1DB" },
          200: { value: "#9BB3C4" },
          300: { value: "#7394AC" },
          400: { value: "#557E9B" },
          500: { value: "#0B2C48" },
          600: { value: "#0A2740" },
          700: { value: "#082135" },
          800: { value: "#061B2B" },
          900: { value: "#04111B" },
        },
        secondary: {
          50: { value: "#F4E8EA" },
          100: { value: "#E3C6CB" },
          200: { value: "#D0A0A8" },
          300: { value: "#BD7985" },
          400: { value: "#AF5D6A" },
          500: { value: "#8B1E2D" },
          600: { value: "#7D1B28" },
          700: { value: "#6C1722" },
          800: { value: "#5B131D" },
          900: { value: "#420E15" },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: "{colors.primary.500}" },
        secondary: { value: "{colors.secondary.500}" },
        destructive: { value: "#ff2e4aff" },
      },
    },
    recipes,
    slotRecipes,
  },
  globalCss: {
    body: {
      backgroundColor: "rgb(245, 245, 245)",
      fontFamily: "Roboto, sans-serif",
    },
  },
});

const theme = createSystem(defaultConfig, themeConfig);

export default theme;
