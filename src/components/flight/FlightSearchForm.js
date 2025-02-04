import React from 'react';
import { Paper, Box } from '@mui/material';
import { AirportAutocomplete } from './AirportAutocomplete';
import { PassengerSelector } from './PassengerSelector';
import { DateSelector } from './DateSelector';
import { useFlightSearch } from '../../hooks/useFlightSearch';
import { SearchButton } from './SearchButton';
import { TripSelector } from './TripSelector';
import { CabinClassSelector } from './CabinClassSelector';

export const FlightSearchForm = () => {
  const { searchParams, updateSearchParams, handleSearch } = useFlightSearch();

  return (
    <Box sx={{ px: { xs: 10, md: 20 }, py: 5 }}>
      <Paper>
        <Box
          sx={{
            alignSelf: 'flex-start',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 3,
          }}
        >
          <TripSelector
            value={searchParams.flightType}
            onChange={(value) => updateSearchParams('flightType', value)}
          />
          <PassengerSelector />
          <CabinClassSelector
            value={searchParams.cabinClass}
            onChange={(value) => updateSearchParams('cabinClass', value)}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            p: 2,
            width: '100%',
            flexFlow: { xs: 'column', md: 'row' },
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
            <AirportAutocomplete
              value={searchParams.origin}
              onChange={(value) => updateSearchParams('origin', value)}
              label='Where from?'
            />
            <AirportAutocomplete
              value={searchParams.destination}
              onChange={(value) => updateSearchParams('destination', value)}
              label='Where to?'
            />
          </Box>
          <DateSelector
            departureDate={searchParams.departureDate}
            returnDate={searchParams.returnDate}
            onChange={updateSearchParams}
            flightType={searchParams.flightType}
          />
        </Box>
        <SearchButton onSearch={handleSearch} />
      </Paper>
    </Box>
  );
};
