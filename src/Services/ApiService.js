import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getAllBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/books`);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

export const getBookById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/books/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching book:', error);
        throw error;
    }
};

export const addBook = async (bookData) => {
    try {
        const response = await axios.post(`${API_URL}/books`, bookData);
        return response.data;
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
};

export const updateBook = async (id, bookData) => {
    try {
        const response = await axios.put(`${API_URL}/books/${id}`, bookData);
        return response.data;
    } catch (error) {
        console.error('Error updating book:', error);
        throw error;
    }
};

export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/books/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
};
