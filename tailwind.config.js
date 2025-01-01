/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#2196f3",
        secondary: "#1787e0",
        backsection: "#ececec",
        facebook: "#1877f2",
        twitter: "#1da1f2",
        youtube: "#ff0000",
        footer: "#b9b9b9",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      animation: {
        "up-and-down": "up-and-down 5s linear infinite",
        "moving-arrow": "moving-arrow 0.6s linear infinite",
        "left-move": "left-move 0.5s linear forwards",
        "right-move": "right-move 0.5s linear forwards",
        flashing: "flashing 0.7s forwards",
        changeBack: "changeBackground 10s linear infinite",
      },
      keyframes: {
        "up-and-down": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-50px)",
          },
        },
        "moving-arrow": {
          "100%": {
            transform: "translateX(10px)",
          },
        },
        "left-move": {
          "50%": {
            left: "0",
            width: "12px",
            height: "12px",
          },
          "100%": {
            left: "0",
            width: "50%",
            height: "100%",
            borderRadius: "0",
          },
        },
        "right-move": {
          "50%": {
            right: "0",
            width: "12px",
            height: "12px",
          },
          "100%": {
            right: "0",
            width: "51%",
            height: "100%",
            borderRadius: "0",
          },
        },
        flashing: {
          "0%, 40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            width: "200%",
            height: "200%",
          },
        },
        changeBackground: {
          "0%, 100%": {
            "background-image": "url('../imgs/discount-background1.jpg')",
          },
          "50%": {
            "background-image": "url('../imgs/discount-background2.jpg')",
          },
        },
      },
      boxShadow: {
        custom:
          "0 12px 20px 0 rgba(0, 0, 0, 0.13), 0 2px 4px 0 rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".counter-services": {
            "counter-increment": "services",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
