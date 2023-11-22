const escapeStringRegexp = require("escape-string-regexp");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#C69C6D",
      },
      backgroundImage: {
        
        parking: 'url("/background-parking-lot.jpg")',
        nxrah: 'url("/background-nxrah.jpg")',
        silhouette: 'url("/background-silhouette.jpg")',
        blood: 'url("/background-bloods.jpg")',
        devil: 'url("/background-devils-canyon.jpg")',
        backto70: 'url("/background-back-70s-section.jpg")',
        bgpain: 'url("/background-invisible-pain-section.jpg")',
        bgabove: 'url("/background-above-the-sea-section.jpg")',
        cj: 'url("/bg-cj.jpg")',
        contacts: 'url("/background-page-contact.jpg")',
        propos: 'url("/background-image-a-propos.jpg")',
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        nomark: [`Nomark`, "sans"],
        poppins: [`var(--font-poppins)`, "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
module.exports.purge = {
  // ...
  options: {
    // ...
    safelist: [
      // ...
      "public/fonts/Nomark.woff2", // Chemin vers le fichier de police
    ],
  },
};
