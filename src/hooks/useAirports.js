import { useState, useEffect } from 'react';
import { fetchAirportSuggestions } from '../api/airportApi';

export const useAirports = (query) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const results = await fetchAirportSuggestions(query);
        setSuggestions(results);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [query]);

  return { suggestions, loading };
};
