import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useTheme } from './context/ThemeContext';
import { createAppTheme } from './theme/theme';
import FlightSearch from './components/flight/FlightSearch';

export default function App() {
  const { isDarkMode } = useTheme();
  const theme = createAppTheme(isDarkMode ? 'dark' : 'light');

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <FlightSearch />
    </MuiThemeProvider>
  );
}
