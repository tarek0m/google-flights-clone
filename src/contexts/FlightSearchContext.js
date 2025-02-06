import React, { createContext, useContext, useState, useCallback } from 'react';
import { fetchFlights } from '../api/flightApi';
import { fetchConfig } from '../api/configApi';
import dayjs from 'dayjs';

const FlightSearchContext = createContext(null);

export const FlightSearchProvider = ({ children }) => {
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

  const [_, setConfig] = useState({
    currency: 'USD',
    market: 'US',
    countryCode: 'US',
  });

  const [loading, setLoading] = useState(false);
  const [itineraries, setItineraries] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // This function is no longer needed
  /* The API doesn't fetch data for any parameters other than 
  // currency: 'USD'
  // market: 'en-US'
  // countryCode: 'US'
  */
  const findOriginCountry = (response, originSubtitle) => {
    return { currency: 'USD', market: 'en-US', countryCode: 'US' };
    // try {
    //   const originCountry = response.data.find(
    //     (country) => country.country === originSubtitle
    //   );
    //   return {
    //     currency: originCountry.currency,
    //     market: originCountry.market,
    //     countryCode: originCountry.countryCode,
    //   };
    // } catch (error) {
    //   console.error('Failed to find origin country:', error);
    //   return { currency: 'USD', market: 'en-US', countryCode: 'US' };
    // }
  };

  const updateSearchParams = useCallback((key, value) => {
    setSearchParams((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSearch = useCallback(async () => {
    if (!searchParams.origin || !searchParams.destination) return;
    setHasSearched(true);
    setLoading(true);
    try {
      const config = await fetchConfig();
      const countryConfig = findOriginCountry(
        config,
        searchParams.origin.presentation.subtitle
      );
      setConfig(countryConfig);
      const results = await fetchFlights(searchParams, countryConfig);
      setItineraries(results);
    } catch (error) {
      console.error('Failed to search itineraries:', error);
      setItineraries([]);
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  return (
    <FlightSearchContext.Provider
      value={{
        searchParams,
        updateSearchParams,
        handleSearch,
        loading,
        itineraries,
        hasSearched,
      }}
    >
      {children}
    </FlightSearchContext.Provider>
  );
};

export const useFlightSearch = () => {
  const context = useContext(FlightSearchContext);
  if (!context) {
    throw new Error(
      'useFlightSearch must be used within a FlightSearchProvider'
    );
  }
  return context;
};
