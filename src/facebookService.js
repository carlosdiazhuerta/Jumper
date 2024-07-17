import axios from 'axios';

const TOKEN = "EAAFD6sJ5NAIBO2f3uZAB1ZCzyTW36sXwJBELDhxERT05210kWa98735WGOSu6NSWpIN052qoIHwLu40PZAX57VAAQmJGxZB3zK5ZCwpzmj7gmyFAwvsrU6RQMVwccFQSjWxJ5v2XEZCtZAZCXmXFdLYKOhFXKtjeO0Temeob4T2dVZBEyQi0hfcyfiJjZCTOXmAHQUMFYxhtqXyUnxZBwIZASgZDZD"; // Reemplaza con tu token
const BASE_URL = 'https://graph.facebook.com/v20.0';

const getPagePosts = async (pageId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${pageId}/posts`, {
      params: {
        access_token: TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching page posts:', error.response ? error.response.data : error);
    throw error;
  }
};

const getPageDetails = async (pageId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${pageId}`, {
      params: {
        access_token: TOKEN,
        fields: 'name,about,location,cover',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching page details:', error.response ? error.response.data : error);
    throw error;
  }
};

export { getPagePosts, getPageDetails };
