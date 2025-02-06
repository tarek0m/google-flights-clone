import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Navbar } from './Navbar';
import { FlightSearchForm } from './FlightSearchForm';
import { FlightResults } from './FlightResults';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { useFlightSearch } from '../../contexts/FlightSearchContext';
import { useTheme } from '../../contexts/ThemeContext';

const FlightSearch = () => {
  const { itineraries, loading, hasSearched } = useFlightSearch();
  const { isDarkMode } = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <Box
        component='img'
        src={
          isDarkMode
            ? 'https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg'
            : 'https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg'
        }
        alt='Flight illustration'
        sx={{
          width: '100%',
          maxHeight: 200,
          objectFit: 'contain',
        }}
      />
      <Box sx={{ p: 0, m: 0 }}>
        <Typography variant='h4' align='center'>
          Flights
        </Typography>
      </Box>
      <FlightSearchForm />
      {loading ? (
        <LoadingSpinner />
      ) : hasSearched ? (
        <FlightResults itineraries={itineraries} />
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
            minHeight: 200,
          }}
        >
          <Typography variant='h6' color='text.secondary'>
            Search for flights to get started
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FlightSearch;
