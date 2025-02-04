import { useState } from 'react';
import { fetchFlights } from '../api/flightApi';
import dayjs from 'dayjs';

export const useFlightSearch = () => {
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    departureDate: dayjs(),
    returnDate: dayjs().add(7, 'day'),
    flightType: 'roundtrip',
    passengers: 1,
    cabinClass: 'economy',
  });

  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);

  const updateSearchParams = (key, value) => {
    console.log('Key:', key, 'Value:', value);
    setSearchParams((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      console.log('Search Params:', searchParams);
      const results = await fetchFlights(searchParams);
      setFlights(results);
      console.log('Flights:', results);
    } finally {
      setLoading(false);
    }
  };

  return {
    searchParams,
    updateSearchParams,
    handleSearch,
    loading,
    flights,
  };
};
