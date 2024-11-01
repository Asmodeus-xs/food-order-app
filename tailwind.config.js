
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        'orange': "#ffc404",
        'dark-orange': "#ffab04",
        'dark-grey': "#1d1a16",
        'light-grey': "#312c1d",
        "more-light-grey": "#46443c",
        'creamy': "#e4ddd4"

      },
      fontFamily: {
        "Lato": ["Lato", "sans-serif"],
        "Raleway": ['Raleway', 'sans-serif']
      },
      letterSpacing: {
        "widest": "0.2rem"
      },
      boxShadow: {
        "custom": '0 1px 6px rgba(0, 0, 0, 0.3)'
      },
      gridTemplateColumns: {
        "custom": 'repeat(auto-fit, minmax(20rem, 1fr))'
      },
      keyframes: {
        fade_slide_up: {
          "0%": { transform: "translateY(4rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        }
      },
      animation: {
        "fade-slide-up": "fade_slide_up 0.3s ease-out forwards"
      }
    },
  },
  plugins: [],
}

