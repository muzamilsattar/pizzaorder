const plugin = require("tailwindcss/plugin");
/**
 * @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono,monospace",
    },

    // container: {
    //   center: true,
    // },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },

  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme("colors");

      for (const color in colors) {
        if (typeof colors[color] === "object") {
          const color1 = colors[color]["500"];
          const color2 = colors[color]["700"];

          if (color1 && color2) {
            // Ensure colors exist
            neonUtilities[`.neon-${color}`] = {
              boxShadow: `0 0 10px ${color1}, 0 0 20px ${color2}`,
            };
          }
        }
      }

      addUtilities(neonUtilities);
    }),
    plugin(function ({ addUtilities, theme }) {
      const beforeAfterBgUtilities = {};

      const bgImages = [
        {
          name: "pattern",
          url: "https://unsplash.com/photos/white-and-red-pizza-led-light-RVXgqEv2lR4",
        },
        { name: "abstract", url: "2.jpg" },
        { name: "nature", url: "1.jpg" },
        { name: "sky", url: "4.jpg" },
      ];

      // Generate utilities for `::before` pseudo-element
      bgImages.forEach(({ name, url }) => {
        beforeAfterBgUtilities[`.before-bg-${name}`] = {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            backgroundImage: `url('${url}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "-1",
            opacity: "0.5",
          },
        };
      });

      // Generate utilities for `::after` pseudo-element
      bgImages.forEach(({ name, url }) => {
        beforeAfterBgUtilities[`.after-bg-${name}`] = {
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: "0",
            backgroundImage: `url('${url}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "-1",
            opacity: "0.5",
          },
        };
      });

      // Add utilities to Tailwind
      addUtilities(beforeAfterBgUtilities);
    }),
  ],
};
