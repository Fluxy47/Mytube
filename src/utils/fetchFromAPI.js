import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const API_KEY = 'e294644c85msh17bbc6d27bdb7c0p124b16jsn74236c98d1b3';

const options = {
  params: {
    maxResults: 5,
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};