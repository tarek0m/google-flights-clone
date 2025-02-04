import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { fetchAirportSuggestions } from '../../api/airportApi';
import { debounce } from 'lodash';

export const AirportAutocomplete = ({ value, onChange, label }) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = debounce(async () => {
      if (inputValue) {
        const suggestions = await fetchAirportSuggestions(inputValue);
        console.log(suggestions);
        setOptions(suggestions);
      } else {
        setOptions([]);
      }
    }, 300); // 300ms debounce delay

    fetchSuggestions();
    return () => fetchSuggestions.cancel(); // Cleanup debounce on unmount
  }, [inputValue]);

  return (
    <Autocomplete
      sx={{ width: '50%' }}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      options={options}
      getOptionLabel={(option) => option?.presentation?.title || ''}
      renderInput={(params) => (
        <TextField {...params} label={label} fullWidth />
      )}
    />
  );
};
