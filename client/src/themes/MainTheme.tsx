import React from "react";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

export type ThemeProps = {};

const MainTheme: React.FC<ThemeProps> = ({ children }) => {
  let theme = createTheme({
    // insert preferred colors as pallete property
    palette: {
      background: {
        default: "#ffffff",
      },
      primary: {
        main: "#00396b",
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MainTheme;
