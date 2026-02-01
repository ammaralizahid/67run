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
      borderRadius: {
        "newsletter": "15px",
        "btn": "5px",
      },
    },
  },
  plugins: [],
};

export default config;
