import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useTheme } from './contexts/ThemeContext';
import { FlightSearchProvider } from './contexts/FlightSearchContext';
import { createAppTheme } from './theme/theme';
import FlightSearch from './components/flight/FlightSearch';

export default function App() {
  const { isDarkMode } = useTheme();
  const theme = createAppTheme(isDarkMode ? 'dark' : 'light');

  return (
    <FlightSearchProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <FlightSearch />
      </MuiThemeProvider>
    </FlightSearchProvider>
  );
}
