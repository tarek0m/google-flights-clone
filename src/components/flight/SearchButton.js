import { Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchButton = ({ onSearch }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: -15,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Button
        sx={{ borderRadius: 100 }}
        variant='contained'
        color='primary'
        startIcon={<SearchIcon />}
        onClick={onSearch}
      >
        Explore
      </Button>
    </Box>
  );
};
