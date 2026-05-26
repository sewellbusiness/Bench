import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sewell: { orange:"#F5A623", dark:"#111827", text:"#1E1E2E", muted:"#6B7280", bg:"#F8F9FA", border:"#E5E7EB", card:"#FFFFFF", blue:"#2563EB" },
        folio:  { navy:"#1B2A4A", orange:"#F5A623", light:"#EEF2FF" },
      },
      fontFamily: { display:["var(--font-sora)","sans-serif"], body:["var(--font-dm-sans)","sans-serif"] },
      keyframes: {
        fadeIn:   { "0%":{ opacity:"0" }, "100%":{ opacity:"1" } },
        fadeInUp: { "0%":{ opacity:"0", transform:"translateY(24px)" }, "100%":{ opacity:"1", transform:"translateY(0)" } },
      },
      animation: { fadeIn:"fadeIn 0.5s ease forwards", fadeInUp:"fadeInUp 0.7s ease forwards" },
    },
  },
  plugins: [],
};
export default config;
