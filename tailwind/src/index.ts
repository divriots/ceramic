import colors from "windicss/colors";
import typography from "windicss/plugin/typography";
export default {
  darkMode: "class",
  plugins: [typography()],
  theme: {
    extend: {
      colors: {
        primary: "#5866CD",
        secondary: "rgba( 46,163,128, var(--tw-text-opacity))",
        black: "#171717",
        background: "#F3F4F6",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              color: "inherit",
              opacity: 0.75,
              fontWeight: "500",
              textDecoration: "underline",
              "&:hover": {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: {
              color: "inherit",
            },
            strong: {
              color: "inherit",
            },
            em: {
              color: "inherit",
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
            code: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
};
