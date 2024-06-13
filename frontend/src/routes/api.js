import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Laravel API base URL
});

export const getTest = () => api.get('/admin/test');

export const getPosts = () => api.get('/posts');
export const getPost = (id) => api.get(`/posts/${id}`);
export const createPost = (data) => api.post('/posts', data);
export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/posts/${id}`);
