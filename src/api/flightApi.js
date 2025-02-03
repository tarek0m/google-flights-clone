const API_URL =
  'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights';

export const fetchFlights = async (from, to, date) => {
  try {
    const response = await fetch(
      `${API_URL}?originSkyId=${from}&destinationSkyId=${to}&date=${date}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch flights:', error);
    return null;
  }
};
