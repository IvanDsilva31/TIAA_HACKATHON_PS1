/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"
    ,"./src/**/*.{vue,js,ts,jsx,tsx}"
    ,"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1200px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "550px" },
      xsm: { max: "425px" },
    },
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
