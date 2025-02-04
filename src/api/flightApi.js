const FLIGHTS_API_URL =
  'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights';

export const fetchFlights = async (searchParams) => {
  const { origin, destination, departureDate, returnDate, cabinClass } =
    searchParams;

  try {
    const response = await fetch(
      `${FLIGHTS_API_URL}?originSkyId=${origin.id}&destinationSkyId=${
        destination.id
      }&date=${departureDate.format(
        'YYYY-MM-DD'
      )}&returnDate=${returnDate.format(
        'YYYY-MM-DD'
      )}&cabinClass=${cabinClass}`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
        },
      }
    );

    const data = await response.json();
    return data.flights || [];
  } catch (error) {
    console.error('Failed to fetch flights:', error);
    return [];
  }
};
