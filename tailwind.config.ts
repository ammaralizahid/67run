import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "footerBg": "#273067",
        "button-bg": "#435CBC",
        "registration-bg": "#FC7BA2",
        "navLinkHover": "#1D4ED8",
        "tabText": "#212121",
        "inputBg": "#F1F1F1",
        "titleColor": "#141414", // Title color
        "brandBlue": "#3652BD",
        "bodyText": "#2B2B2B",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "dmSans": ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "footerHeading": ["16px", { lineHeight: "36px" }],
        "footerItem": ["16px", { lineHeight: "28px" }],
        "footerBottom": ["14px", { lineHeight: "21px" }],
        "newsletterInput": ["18px", { lineHeight: "18px" }],
        "tabText": ["15px", { lineHeight: "100%" }],
        "buttonText": ["15px", { lineHeight: "100%" }],
        "10": "10px",
        "14": "14px",
        "16": "16px",
        "17": "17px",
        "18": "18px",
        "20": "20px",
        "32": "32px",
        "43": "43px",
      },
      spacing: {
        "newsletterW": "383px",
        "newsletterH": "65px",
        "footerIconGap": "1rem",
        "iconSize": "20px",
        "loginBtnW": "109px",
        "loginBtnH": "35px",
        "regBtnW": "108.536px",
        "regBtnH": "35px",
      },
      maxWidth: {
        "page": "1366px",
        "content": "1018px",
      },
      lineHeight: {
        "15": "15px",
        "25": "25px",
        "39": "39px",
        "42": "42px",
      },
      letterSpacing: {
        "2": "0.02em",
      },
      borderRadius: {
        "newsletter": "15px",
        "btn": "5px",
        "5": "5px",
        "10": "10px",
      },
      keyframes: {
        heroSlideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "hero-slide-up": "heroSlideUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
