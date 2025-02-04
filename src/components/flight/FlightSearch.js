import React from 'react';
import { Box, Container } from '@mui/material';
import { ThemeToggle } from '../common/ThemeToggle';
import { FlightSearchForm } from './FlightSearchForm';
import { FlightResults } from './FlightResults';
import { useFlightSearch } from '../../hooks/useFlightSearch';

const FlightSearch = () => {
  const { flights, loading } = useFlightSearch();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <ThemeToggle />
        </Box>
        <FlightSearchForm />
        <FlightResults flights={flights} loading={loading} />
      </Container>
    </Box>
  );
};

export default FlightSearch;
