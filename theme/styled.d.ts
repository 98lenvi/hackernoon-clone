// import original module declarations
import "styled-components";

interface ColorPallete {
  0?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  text1: string;
  text2?: string;
  text3?: string;
}

interface Typography {
  color: string;
  fontWeight: string;
  fontFamily: string;
  fontSize: string;
  lineHeight?: string;
  letterSpacing?: string;
}

interface Breakpoints {
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
}

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: ColorPallete;
      secondary: ColorPallete;
      tertiary: ColorPallete
    };
    fontFamily: {
      primary?: string;
      secondary?: string;
    };
    typography: {
      title1: Typography;
      subtitle1: Typography;
    };
    breakpoints: Breakpoints
  }
}
