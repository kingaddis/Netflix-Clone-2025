// src/axiosInstance.js

import axios from 'axios';

const Instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/', // TMDb API base URL

});

export default Instance;
