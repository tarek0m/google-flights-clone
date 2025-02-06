import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  Button,
  Box,
  Typography,
  IconButton,
  FormControl,
} from '@mui/material';
import { Person, Add, Remove, ArrowDropDown } from '@mui/icons-material';
import { useFlightSearch } from '../../contexts/FlightSearchContext';

export const PassengerSelector = () => {
  const { searchParams, updateSearchParams } = useFlightSearch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [tempPassengers, setTempPassengers] = useState({
    ...searchParams.passengers,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (type, operation) => {
    setTempPassengers((prev) => ({
      ...prev,
      [type]:
        operation === 'inc' ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  const handleCancel = () => {
    setTempPassengers({ ...searchParams.passengers });
    handleClose();
  };

  const handleDone = () => {
    updateSearchParams('passengers', { ...tempPassengers });
    handleClose();
  };

  const totalPassengers =
    searchParams.passengers.adults +
    searchParams.passengers.children +
    searchParams.passengers.infantsInSeat +
    searchParams.passengers.infantsOnLap;

  return (
    <FormControl>
      <Button
        sx={{ p: 0, m: 0 }}
        variant='standard'
        onClick={handleClick}
        startIcon={<Person />}
        endIcon={<ArrowDropDown />}
      >
        {totalPassengers}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCancel}>
        <MenuItem disableRipple>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
          >
            <Typography>Adults</Typography>
            <Box display='flex' alignItems='center'>
              <IconButton
                disabled={tempPassengers.adults <= 1}
                size='small'
                onClick={() => handleChange('adults', 'dec')}
              >
                <Remove />
              </IconButton>
              <Typography>{tempPassengers.adults}</Typography>
              <IconButton
                size='small'
                onClick={() => handleChange('adults', 'inc')}
              >
                <Add />
              </IconButton>
            </Box>
          </Box>
        </MenuItem>

        <MenuItem disableRipple>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
          >
            <Typography>Children (2-11)</Typography>
            <Box display='flex' alignItems='center'>
              <IconButton
                size='small'
                onClick={() => handleChange('children', 'dec')}
              >
                <Remove />
              </IconButton>
              <Typography>{tempPassengers.children}</Typography>
              <IconButton
                size='small'
                onClick={() => handleChange('children', 'inc')}
              >
                <Add />
              </IconButton>
            </Box>
          </Box>
        </MenuItem>

        <MenuItem disableRipple>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
          >
            <Typography>Infants (In seat)</Typography>
            <Box display='flex' alignItems='center'>
              <IconButton
                size='small'
                onClick={() => handleChange('infantsInSeat', 'dec')}
              >
                <Remove />
              </IconButton>
              <Typography>{tempPassengers.infantsInSeat}</Typography>
              <IconButton
                size='small'
                onClick={() => handleChange('infantsInSeat', 'inc')}
              >
                <Add />
              </IconButton>
            </Box>
          </Box>
        </MenuItem>

        <MenuItem disableRipple>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
          >
            <Typography>Infants (On lap)</Typography>
            <Box display='flex' alignItems='center'>
              <IconButton
                size='small'
                onClick={() => handleChange('infantsOnLap', 'dec')}
              >
                <Remove />
              </IconButton>
              <Typography>{tempPassengers.infantsOnLap}</Typography>
              <IconButton
                size='small'
                onClick={() => handleChange('infantsOnLap', 'inc')}
              >
                <Add />
              </IconButton>
            </Box>
          </Box>
        </MenuItem>

        <MenuItem
          disableRipple
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              cursor: 'default',
            },
          }}
        >
          <Box display='flex' justifyContent='space-between' width='100%'>
            <Button variant='text' color='primary' onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant='text' color='primary' onClick={handleDone}>
              Done
            </Button>
          </Box>
        </MenuItem>
      </Menu>
    </FormControl>
  );
};
