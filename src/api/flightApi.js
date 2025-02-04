const FLIGHTS_API_URL =
  'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights';

export const fetchFlights = async (searchParams) => {
  const { origin, destination, departureDate, returnDate, cabinClass } =
    searchParams;
  const url = `${FLIGHTS_API_URL}?originSkyId=${
    origin.skyId
  }&destinationSkyId=${destination.skyId}&originEntityId=${origin.entityId}
      &destinationEntityId=${destination.entityId}
      &date=${departureDate.format(
        'YYYY-MM-DD'
      )}&returnDate=${returnDate.format(
    'YYYY-MM-DD'
  )}&cabinClass=${cabinClass}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
    },
  };
  try {
    const response = await fetch(url, options);

    const data = await response.json();
    console.log('Data:', data);
    return data.flights || [];
  } catch (error) {
    console.error('Failed to fetch flights:', error);
    return [];
  }
};
