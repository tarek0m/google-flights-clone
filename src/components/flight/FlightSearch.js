import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from './Navbar';
import { FlightSearchForm } from './FlightSearchForm';
import { FlightResults } from './FlightResults';
import { useFlightSearch } from '../../hooks/useFlightSearch';

const FlightSearch = () => {
  const { flights, loading } = useFlightSearch();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      <FlightSearchForm />
      <FlightResults flights={flights} loading={loading} />
    </Box>
  );
};

export default FlightSearch;
