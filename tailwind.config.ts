import type { Config } from "tailwindcss";
//import { designSystemConfig } from "./design-system"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./design-system/**/*.{ts,tsx}",

  ],
  //theme: designSystemConfig.theme,
  plugins: [],
} satisfies Config;
