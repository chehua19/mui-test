import React from "react";
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import '@fontsource/be-vietnam'

type ThemeProps = {
    children?: React.ReactNode;
};

const theme = createTheme({
    typography: {
      fontFamily: "Be Vietnam", 
      fontSize: 9,
    }
  });

const Theme: React.FC<ThemeProps> = (props) => {
    const { children }  = props;
    return(
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    )
};

export default Theme;