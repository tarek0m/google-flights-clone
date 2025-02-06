const API_URL =
  'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport';

export const fetchAirportSuggestions = async (query, abortSignal) => {
  try {
    const response = await fetch(`${API_URL}?query=${query}`, {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
      },
      signal: abortSignal,
    });
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    if (error.name === 'AbortError') {
      return [];
    }
    console.error('Failed to fetch airport suggestions:', error);
    return [];
  }
};
