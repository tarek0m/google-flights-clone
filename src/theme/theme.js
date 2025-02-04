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
  });
