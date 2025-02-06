const CONFIG_API_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/getConfig';

export const fetchConfig = async (originCountry) => {
  try {
    const response = await fetch(`${CONFIG_API_URL}`, {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
      },
    });
    if (!response.ok) throw new Error('Failed to fetch config');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch config:', error);
  }
};
