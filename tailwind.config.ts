import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      glow: {
        primary: "0ea5e9",
      },
      colors: {
        primary: "#0ea5e9",
        "primary-darker": "#0369a1",

        secondary: "#d946ef",
        "secondary-darker": "#a21caf",

        accent: "#14b8a6",
        "accent-darker": "#0f766e",

        base: {
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#1e293b",
          800: "#cbd5e1",
          900: "#0f172a",
        },

        info: "transparent",
        "info-darker": "transparent",

        success: "#22c55e",
        "success-darker": "#15803d",

        warning: "#eab308",
        "warning-darker": "#a16207",

        error: "#ef4444",
        "error-darker": "#b91c1c",
      },
    },
  },
  plugins: [],
};
export default config;
