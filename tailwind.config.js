/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        xs: '300px', 
        // => @media (min-width: 300px) ( ... )
        sm: '640px',
        // => @media (min-width: 640px) ( ... )
        md: '768px',
        // => @media (min-width: 768px) ( ... )
        lg: '1024px',
        // => @media (min-width: 1024px) ( ... )
        xl: '1280px',
        // => @media (min-width: 1280px) ( ... )
        '2xl': '1536px',
        // => @media (min-width: 1536px) ( ... )
  
      },
      fontSize: {
        base: "16px",
        xs: "14px",
        xm: "15px",
        sm: "16px",
        md: "18px",
        lg: "20px",
        xl: "22px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",
        "6xl": "40px",
        "7xl": "48px",
        "8xl": "56px",
        "9xl": "64px",
        "10xl": "72px",
      },
      extend: {
        boxShadow: {
          '5xl': '20px 20px 50px rgba(0,0,0,0.5)',
        },
        fontFamily: {
          opensans: ["Open Sans", "sans-serif"],
          roboto: ["Roboto", "sans-serif"]
        },
        colors: {
          primary: "#1565D8",
          dark: {
            light: "#5A7184",
            hard: "#0D2436",
            soft: "#183B56"
          },
        },

        
        dropShadow: {
            glow: [
              "0 0px 20px rgba(0, 223, 154, 0.35)",
              "0 0px 65px rgba(255, 255,255, 0.2)"
            ]
        }
        
      }
    }
}