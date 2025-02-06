import { useState } from 'react';
import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import { useAirports } from '../../hooks/useAirports';

export const AirportAutocomplete = ({ value, onChange, label }) => {
  const [inputValue, setInputValue] = useState('');
  const { suggestions, loading } = useAirports(inputValue);

  return (
    <Autocomplete
      fullWidth
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      options={suggestions}
      getOptionLabel={(option) => option?.presentation?.suggestionTitle || ''}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading && <CircularProgress size={20} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
