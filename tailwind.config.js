/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      DarkGreenColor: "#008080",
      LightGreenColor: "#04DCDC",
      PinkColor: "#FF6B6B",
      RedColor: "#ED2020",
      AshColor: "#F9F9F9",
      GreyColor: "#666666",
      BlackColor: "#000000",
      WhiteColor: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
}