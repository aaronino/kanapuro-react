import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import logo from '../images/logo-transparent.png';
import { Container } from '@mui/material';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    spacing: 2,
    components: {
        MuiButton: {
          styleOverrides: {
            startIcon: {
              margin: '0'
            },
          },
        }
      },
});

type LayoutProps = {
    subtitle: string,
    children?: ReactNode;
}

export const Layout = ({children, subtitle = ""}: LayoutProps) => {
	darkTheme.spacing(2);
    return (
        <Container>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>{subtitle}</h1>
                </header>
                <div className="App">
                    {children}
                </div>
            </ThemeProvider>
        </Container>
    );
}

export default Layout;
