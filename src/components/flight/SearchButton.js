import { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchButton = ({ onSearch }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: -15,
        width: '100%',
        textAlign: 'center',
      }}
    >
      {width < 900 ? (
        <Button
          sx={{ borderRadius: 100, px: 0 }}
          variant='contained'
          color='primary'
          onClick={onSearch}
        >
          <SearchIcon />
        </Button>
      ) : (
        <Button
          sx={{ borderRadius: 100 }}
          variant='contained'
          color='primary'
          startIcon={<SearchIcon />}
          onClick={onSearch}
        >
          Explore
        </Button>
      )}
    </Box>
  );
};
