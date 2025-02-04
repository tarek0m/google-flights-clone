import { FormControl, MenuItem, Select } from '@mui/material';

export const CabinClassSelector = ({ value, onChange }) => {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        variant='standard'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value='economy'>Economy</MenuItem>
        <MenuItem value='premiumEconomy'>Premium Economy</MenuItem>
        <MenuItem value='business'>Business</MenuItem>
        <MenuItem value='first'>First</MenuItem>
      </Select>
    </FormControl>
  );
};
