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

export const PassengerSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infantsInSeat: 0,
    infantsOnLap: 0,
  });

  const [tempPassengers, setTempPassengers] = useState({ ...passengers });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log('Passengers:', passengers);
    console.log('event.currentTarget:', event.currentTarget);
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
    setTempPassengers({ ...passengers });
    handleClose();
  };

  const handleDone = () => {
    setPassengers({ ...tempPassengers });
    handleClose();
  };

  const totalPassengers =
    passengers.adults +
    passengers.children +
    passengers.infantsInSeat +
    passengers.infantsOnLap;

  return (
    <FormControl>
      <Button
        variant='outlined'
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
                disabled
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

        <MenuItem disableRipple>
          <Box display='flex' justifyContent='space-between' width='100%'>
            <Button color='primary' onClick={handleCancel}>
              Cancel
            </Button>
            <Button color='primary' onClick={handleDone}>
              Done
            </Button>
          </Box>
        </MenuItem>
      </Menu>
    </FormControl>
  );
};
