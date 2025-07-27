import themes from "daisyui/theme/object";

const config = {
  plugins: ["@tailwindcss/postcss"],
  themes: [
    {
      light: {
        ...themes["[data-theme=light]"],
      },
      dark: {
        ...themes["[data-theme=dark]"],
      },
    },
  ],
};

export default config;
