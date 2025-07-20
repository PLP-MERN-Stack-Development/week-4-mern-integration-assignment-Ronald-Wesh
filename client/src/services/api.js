import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const getPosts = () => axios.get(`${BASE_URL}/posts`);
export const getCategories = () => axios.get(`${BASE_URL}/categories`);
export const createPost = (post) => axios.post(`${BASE_URL}/posts`, post);
