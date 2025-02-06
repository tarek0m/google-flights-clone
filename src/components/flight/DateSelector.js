import React from 'react';
import { Box, FormControl, FormHelperText } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export const DateSelector = ({
  departureDate,
  returnDate,
  onChange,
  flightType, // can be 'oneway' or 'roundtrip'
}) => {
  const handleDepartureDateChange = (newValue) => {
    onChange('departureDate', newValue);
    // If return date is before new departure date, update it
    if (returnDate && dayjs(newValue).isAfter(returnDate)) {
      onChange('returnDate', dayjs(newValue).add(1, 'day'));
    }
  };

  const handleReturnDateChange = (newValue) => {
    onChange('returnDate', newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: 'flex',
          flexFlow: { xs: 'column', md: 'row' },
          gap: 2,
        }}
      >
        <FormControl fullWidth>
          <DatePicker
            label='Departure Date'
            value={departureDate}
            onChange={handleDepartureDateChange}
            disablePast
            slotProps={{
              textField: {
                fullWidth: true,
                error: false,
              },
            }}
          />
        </FormControl>

        {flightType === 'roundtrip' && (
          <FormControl fullWidth>
            <DatePicker
              label='Return Date'
              value={returnDate}
              onChange={handleReturnDateChange}
              disablePast
              minDate={departureDate || dayjs()}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: false,
                },
              }}
            />
          </FormControl>
        )}
      </Box>
    </LocalizationProvider>
  );
};
