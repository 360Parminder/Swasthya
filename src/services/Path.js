import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

// Create an Axios instance
const Path = axios.create({
    baseURL:'http://localhost:8003', // Replace with your API base URL
    // baseURL:'https://swasthya-end.slugdev.me'
  // timeout: 10000, // Optional timeout
});


// List of routes that do not require authentication
const publicRoutes = ['/user/login', '/user/signup', '/user/sendOtp', '/user/verifyOtp'];

// Request interceptor
Path.interceptors.request.use(
  async (config) => {
    // Check if the request URL is not in the publicRoutes list
    if (!publicRoutes.includes(config.url)) {
      try {
        // Retrieve the token from EncryptedStorage
        const token = await EncryptedStorage.getItem('userToken');
        console.log('Token retrieved:', token);

        // If a token is found, add it to the Authorization header
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          // Optionally handle the case where no token is found
          console.warn('No token found. Please log in.');
        }
      } catch (error) {
        // Handle any errors that occur while retrieving the token
        console.error('Error retrieving token:', error);
      }
    }

    // Return the modified config
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);


// Response interceptor
Path.interceptors.response.use(
  (response) => {
    // console.log('Response received:', response.data);
    return response;
  },
  async (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          // Alert.alert('Bad Request:', data.message || 'Invalid request');
          break;
        case 401:
          // Alert.alert('Unauthorized', data.message || 'Authentication failed');
          try {
            await EncryptedStorage.removeItem('userToken'); // Clear token
            console.log('Token cleared. Redirecting to login...');
            // Add your navigation logic to redirect to the login screen
          } catch (storageError) {
            console.error('Error clearing token:', storageError);
          }
          break;
        case 403:
          console.error('Forbidden:', data.message || 'You do not have access');
          break;
        case 404:
          console.error('Not Found:', data.message || 'Resource not found');
          break;
        case 500:
          console.error('Internal Server Error:', data.message || 'Server error');
          break;
        case 503:
          console.error('Service Unavailable:', data.message || 'Try again later');
          break;
        default:
          console.error(`Error ${status}:`, data.message || 'An unknown error occurred');
          break;
      }
    } else if (error.request) {
      console.error('No response received from server:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }

    return Promise.reject({
      status: error.response?.status || 'Network/Request Error',
      message: error.response?.data?.message || error.message || 'An unknown error occurred',
    });
  }
);


export default Path;