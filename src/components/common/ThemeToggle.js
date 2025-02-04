import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} color='inherit'>
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
