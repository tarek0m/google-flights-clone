import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeToggle } from '../common/ThemeToggle';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { THEME_CONSTANTS } from '../../theme/constants';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const navItems = [
    'Travel',
    'Explore',
    'Flights',
    'Hotels',
    'Vacation Rentals',
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item}
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: '1rem',
                    fontWeight: item === 'Flights' ? 'bold' : 'normal',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      sx={{
        position: 'sticky',
        width: '100%',
        bgcolor: 'background.default',
        borderRadius: 0,
        borderBottom: 1,
        borderColor: 'divider',
        px: { xs: 1, md: 4 },
        py: 0,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          width: '100%',
          justifyContent: 'space-between',
          p: { xs: 1, md: 2 },
        }}
      >
        {/* Mobile menu icon */}
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{
            display: { md: 'none' },
            color: isDarkMode
              ? THEME_CONSTANTS.lightPaper
              : THEME_CONSTANTS.darkPaper,
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop navigation */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexWrap: 'wrap',
            gap: 2,
            flexGrow: 1,
            justifyContent: 'flex-start',
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              variant={item === 'Flights' ? 'contained' : 'text'}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Theme toggle - always visible */}
        <Box sx={{ ml: 'auto' }}>
          <ThemeToggle />
        </Box>

        {/* Mobile drawer */}
        <Drawer
          variant='temporary'
          anchor='left'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
