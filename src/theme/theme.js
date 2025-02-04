import { createTheme } from '@mui/material/styles';
import { THEME_CONSTANTS } from './constants';

export const createAppTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main:
          mode === 'dark'
            ? THEME_CONSTANTS.darkPrimary
            : THEME_CONSTANTS.lightPrimary,
      },
      background: {
        default:
          mode === 'dark'
            ? THEME_CONSTANTS.darkBackground
            : THEME_CONSTANTS.lightBackground,
        paper:
          mode === 'dark'
            ? THEME_CONSTANTS.darkPaper
            : THEME_CONSTANTS.lightPaper,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'outlined', // Set default variant to 'outlined'
        },
        styleOverrides: {
          root: {
            borderRadius: 100,
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 16, // Equivalent to p: 1 (1 * 8px = 8px)
            borderRadius: 8, // Equivalent to borderRadius: 2 (2 * 8px = 16px)
            boxShadow:
              '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)', // Equivalent to elevation={3}
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            '&$selected': {
              backgroundColor:
                mode === 'dark'
                  ? THEME_CONSTANTS.darkPaper
                  : THEME_CONSTANTS.lightPaper,
            },
            '&:hover': {
              backgroundColor: 'transparent', // Remove background color on hover
              boxShadow: 'none',
              cursor: 'default',
            },
            color: mode === 'dark' ? 'lightgrey' : 'darkgrey',
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          underline: {
            '&:before': {
              borderBottom: 'none', // Remove the underline
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: 'none', // Remove the underline on hover
            },
            '&:after': {
              borderBottom: 'none', // Remove the underline when focused
            },
          },
        },
      },
    },
  });
