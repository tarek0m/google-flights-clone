const FLIGHTS_API_URL =
  'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights';

export const fetchFlights = async (searchParams, configs) => {
  const {
    origin,
    destination,
    departureDate,
    returnDate,
    flightType,
    passengers,
    cabinClass,
  } = searchParams;

  const { currency, market, countryCode } = configs;

  const baseUrl = new URL(FLIGHTS_API_URL);
  const params = new URLSearchParams({
    originSkyId: origin.skyId,
    destinationSkyId: destination.skyId,
    originEntityId: origin.entityId,
    destinationEntityId: destination.entityId,
    cabinClass,
    date: departureDate.format('YYYY-MM-DD'),
    adults: passengers.adults.toString(),
    currency,
    market,
    countryCode,
  });

  if (flightType === 'roundtrip' && returnDate) {
    params.append('returnDate', returnDate.format('YYYY-MM-DD'));
  }
  if (passengers.children > 0) {
    params.append('childrens', passengers.children.toString());
  }
  const totalInfants = passengers.infantsInSeat + passengers.infantsOnLap;
  if (totalInfants > 0) {
    params.append('infants', totalInfants.toString());
  }

  baseUrl.search = params.toString();

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(baseUrl.toString(), options);
    if (!response.ok) throw new Error('Failed to fetch flights');
    const data = await response.json();
    return data.data.itineraries || [];
  } catch (error) {
    console.error('Failed to fetch flights:', error);
    throw error;
  }
};
