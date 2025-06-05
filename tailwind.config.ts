//import type { Config } from "tailwindcss";

//export default {
  //content: [
    //"./pages/**/*.{js,ts,jsx,tsx,mdx}",
    //"./components/**/*.{js,ts,jsx,tsx,mdx}",
    //"./app/**/*.{js,ts,jsx,tsx,mdx}",
  //],
  //theme: {
  //  extend: {
    //  colors: {
     //   background: "var(--background)",
      //  foreground: "var(--foreground)",
    //  },
   // },
 // },
 // plugins: [],
//} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/page.tsx",
    "./app/about/page.tsx",
    "./app/contact/page.tsx",
    "./app/layout.tsx",
    "./components/ImageLink.tsx",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
