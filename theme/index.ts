import { DefaultTheme } from "styled-components";
import GlobalTheme from "./globalTheme";

const colors = {
  primary: {
    0: "#e5ffe5",
    100: "#b3ffb3",
    200: "#80ff80",
    300: "#4dff4d",
    400: "#1aff1a",
    500: "#00e600",
    600: "#00b300",
    700: "#008000",
    800: "#004d00",
    900: "#001a00",
    text1: "rgb(246, 247, 249)",
    text2: "rgb(0, 255, 0)",
  },
  secondary: {
    900: "#0d0d0d",
    800: "#262626",
    700: "#404040",
    600: "#595959",
    500: "#737373",
    400: "#8c8c8c",
    300: "#a6a6a6",
    200: "#bfbfbf",
    100: "#d9d9d9",
    0: "#FFFFFF",
    text1: "rgb(60, 60, 59)",
    text2: "rgb(0, 255, 0)",
    text3: "rgb(193, 202, 212)"
  },
  tertiary: {
    900: "#181701",
    800: "#494504",
    700: "#797306",
    600: "#aaa109",
    500: "#dacf0b",
    400: "#f4e825",
    300: "#f6ed55",
    200: "#f9f286",
    100: "#fbf7b6",
    0: "#fefce7",
    text1: "rgb(102, 97, 5)"
  }
};

const fontFamily = {
  primary: '"IBM Plex Sans", sans-serif',
  secondary: `"IBM Plex Mono", monospace;`,
};

const typography = {
  title1: {
    color: colors.secondary[400],
    fontWeight: "600",
    fontFamily: fontFamily.primary,
    fontSize: "80px",
    lineHeight: "1.2",
    letterSpacing: "0.00em",  
  },
  subtitle1: {
    color: colors.primary[0],
    fontWeight: "600",
    fontFamily: fontFamily.primary,
    fontSize: "38px",
    lineHeight: "1.2",
    letterSpacing: "0.00em",
  },
};

const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "1024px",
  lg: "1200px",
  xl: "1366px",
}

const theme: DefaultTheme = {
  colors,
  fontFamily,
  typography,
  breakpoints
};

export { theme, GlobalTheme };
