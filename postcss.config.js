import tailwindPostcss from "@tailwindcss/postcss";

export default {
  plugins: [
    tailwindPostcss({
      config: "./tailwind.config.js",
    }),
  ],
};
