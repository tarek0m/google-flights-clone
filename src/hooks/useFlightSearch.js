import { useState, useCallback } from 'react';
import { fetchFlights } from '../api/flightApi';
import dayjs from 'dayjs';

export const useFlightSearch = () => {
  const [searchParams, setSearchParams] = useState({
    origin: null,
    destination: null,
    departureDate: dayjs(),
    returnDate: dayjs().add(7, 'day'),
    flightType: 'roundtrip',
    passengers: {
      adults: 1,
      children: 0,
      infantsInSeat: 0,
      infantsOnLap: 0,
    },
    cabinClass: 'economy',
  });

  const [loading, setLoading] = useState(false);
  const [itineraries, setItineraries] = useState([]);

  const updateSearchParams = useCallback((key, value) => {
    setSearchParams((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSearch = useCallback(async () => {
    if (!searchParams.origin || !searchParams.destination) return;

    setLoading(true);
    try {
      const results = await fetchFlights(searchParams);
      // Update both states together
      setItineraries(results);
    } catch (error) {
      console.error('Failed to search itineraries:', error);
      setItineraries([]); // Clear results on error
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  return {
    searchParams,
    updateSearchParams,
    handleSearch,
    loading,
    itineraries,
  };
};
