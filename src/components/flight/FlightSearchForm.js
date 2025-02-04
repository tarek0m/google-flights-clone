import React from 'react';
import { Grid, Box } from '@mui/material';
import { AirportAutocomplete } from './AirportAutocomplete';
import { PassengerSelector } from './PassengerSelector';
import { DateSelector } from './DateSelector';
import { useFlightSearch } from '../../hooks/useFlightSearch';

export const FlightSearchForm = () => {
  const { searchParams, updateSearchParams, handleSearch } = useFlightSearch();

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <AirportAutocomplete
            value={searchParams.origin}
            onChange={(value) => updateSearchParams('origin', value)}
            label='From'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AirportAutocomplete
            value={searchParams.destination}
            onChange={(value) => updateSearchParams('destination', value)}
            label='To'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DateSelector
            departureDate={searchParams.departureDate}
            returnDate={searchParams.returnDate}
            onChange={updateSearchParams}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PassengerSelector />
        </Grid>
      </Grid>
    </Box>
  );
};
