import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export const LoadingSpinner = () => (
  <Box display='flex' justifyContent='center' p={4}>
    <CircularProgress />
  </Box>
);
