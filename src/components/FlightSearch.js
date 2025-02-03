import React, { useState } from 'react';
import { fetchFlights } from '../api/flightApi';
import {
  TextField,
  Typography,
  Box,
  CircularProgress,
  Paper,
} from '@mui/material';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExploreIcon from '@mui/icons-material/Explore';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FlightSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState(dayjs());
  const [returnDate, setReturnDate] = useState(dayjs());
  const [flightType, setFlightType] = useState('oneway');
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('economy');
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);

  const searchFlights = async () => {
    console.log('searching');
    // setLoading(true);
    // try {
    //   const data = await fetchFlights(origin, destination, departureDate);
    //   if (data) setFlights(data.flights || []);
    // } catch (error) {
    //   console.error('Error fetching flights:', error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Box sx={{ bgcolor: '#202124', minHeight: '100vh', color: '#fff' }}>
      {/* Navbar */}
      <AppBar
        position='static'
        sx={{
          bgcolor: '#1e1e1e',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Toolbar>
          <Button color='inherit'>Travel</Button>
          <Button color='inherit'>Explore</Button>
          <Button color='inherit'>Flights</Button>
          <Button color='inherit'>Hotels</Button>
          <Button color='inherit'>Vacation Rentals</Button>
        </Toolbar>
      </AppBar>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '300px',
          backgroundImage:
            'url(https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Container sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant='h3' gutterBottom>
          Flights
        </Typography>
        <Paper
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#36373a',
            p: 1,
            borderRadius: 2,
          }}
          elevation={3}
        >
          <Box
            sx={{
              alignSelf: 'flex-start',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              bgcolor: '#36373a',
              color: '#fff',
              px: 1,
              borderRadius: 2,
            }}
          >
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                variant='standard'
                value={flightType}
                onChange={(e) => setFlightType(e.target.value)}
              >
                <MenuItem value='oneway'>One-way</MenuItem>
                <MenuItem value='roundtrip'>Round-trip</MenuItem>
                <MenuItem value='multicity'>Multi-city</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <Select
                variant='standard'
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                {[...Array(10).keys()].map((num) => (
                  <MenuItem
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                    key={num + 1}
                    value={num + 1}
                  >
                    <PersonIcon /> <span>{num + 1}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ maxWidth: 200 }}>
              <Select
                variant='standard'
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
              >
                <MenuItem value='economy'>Economy</MenuItem>
                <MenuItem value='premiumEconomy'>Premium Economy</MenuItem>
                <MenuItem value='business'>Business</MenuItem>
                <MenuItem value='first'>First</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              bgcolor: '#36373a',
              p: 2,
              mb: 2,
              borderRadius: 2,
            }}
          >
            <TextField
              placeholder='Where from?'
              variant='outlined'
              InputProps={{ startAdornment: <LocationOnIcon /> }}
              fullWidth
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
            <TextField
              placeholder='Where to?'
              variant='outlined'
              InputProps={{ startAdornment: <SearchIcon /> }}
              fullWidth
              onChange={(e) => setDestination(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: '50%' }}
                label='Departure'
                disablePast
                onChange={(newValue) => setDepartureDate(newValue)}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: '50%' }}
                label='Return'
                disablePast
                onChange={(newValue) => setReturnDate(newValue)}
              />
            </LocalizationProvider>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: -20,
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Button
              sx={{ borderRadius: 100 }}
              variant='contained'
              color='primary'
              startIcon={<SearchIcon />}
              onClick={searchFlights}
            >
              Explore
            </Button>
          </Box>
        </Paper>
      </Container>
      {/* Explore Destinations */}
      <Container sx={{ textAlign: 'center', py: 3 }}>
        <Typography variant='h5'>
          Find cheap flights from Alexandria to anywhere
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', py: 2 }}>
          <Button variant='contained'>Alexandria</Button>
          <Button variant='contained'>Cairo</Button>
          <Button variant='contained'>El Dabaa</Button>
          <Button variant='contained'>Marsa Matruh</Button>
        </Box>
        <Button variant='outlined' startIcon={<ExploreIcon />}>
          Explore Destinations
        </Button>
      </Container>
      {/* Suggested Flights */}
      <Container sx={{ py: 3 }}>
        <Grid container spacing={3}>
          {['New York', 'London', 'Los Angeles', 'Paris'].map((city, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ bgcolor: '#36373a' }}>
                <CardMedia
                  component='img'
                  height='140'
                  image={`https://source.unsplash.com/200x140/?${city}`}
                  alt={city}
                />
                <CardContent>
                  <Typography variant='h6'>{city}</Typography>
                  <Typography variant='body2'>
                    EGP {Math.floor(Math.random() * 50000)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FlightSearch;

{
  /* <Container maxWidth='md'>
      
      {loading ? (
        <CircularProgress />
      ) : (
        flights.map((flight, index) => (
          <Box key={index} p={2} border={1} borderRadius={2} mb={2}>
            <Typography variant='h6'>{flight.airline}</Typography>
            <Typography>
              From: {flight.origin} - To: {flight.destination}
            </Typography>
            <Typography>Price: {flight.price}</Typography>
          </Box>
        ))
      )}
    </Container> */
}
