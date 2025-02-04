import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { fetchAirportSuggestions } from '../../api/airportApi';

export const AirportAutocomplete = ({ value, onChange, label }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (value) {
      fetchAirportSuggestions(value, setSuggestions);
    }
  }, [value]);

  return (
    <Autocomplete
      options={suggestions}
      getOptionLabel={(option) => option.presentation?.title || ''}
      renderInput={(params) => (
        <TextField {...params} label={label} variant='outlined' />
      )}
      onChange={(_, value) => onChange(value)}
    />
  );
};
