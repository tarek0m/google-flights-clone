import { FormControl, MenuItem, Select } from '@mui/material';

export const TripSelector = ({ value, onChange }) => {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        variant='standard'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value='oneway'>One-way</MenuItem>
        <MenuItem value='roundtrip'>Round-trip</MenuItem>
        <MenuItem value='multicity'>Multi-city</MenuItem>
      </Select>
    </FormControl>
  );
};
