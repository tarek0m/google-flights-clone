import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { ThemeToggle } from '../common/ThemeToggle';

export const Navbar = () => {
  return (
    <AppBar
      sx={{
        position: 'sticky',
        width: '100%',
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        px: { xs: 2, md: 4 },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          width: '100%',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Button>Travel</Button>
          <Button>Explore</Button>
          <Button variant='contained'>Flights</Button>
          <Button>Hotels</Button>
          <Button>Vacation Rentals</Button>
        </Box>
        <Box>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
