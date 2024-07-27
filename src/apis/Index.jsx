import axios from "axios";

const BASE_URL = 'http://localhost:4528';

const token = `Bearer ${localStorage.getItem('product-token')};`


export const login = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/log-in`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addProduct = async (data) => {
    try {
        let response = await axios.post(`${BASE_URL}/products`, data, {
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data"
            }
        }
        )
        return response.data
    }
    catch (error) {
        throw error
        // console.log(error);
    }
}


export const getAllProduct = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const updateProduct = async (id, data) => {
    try {
        const response = await axios.put(`${BASE_URL}/products/${id}`, data,);
        return response.data;
    } catch (error) {
        throw error;
    }
}