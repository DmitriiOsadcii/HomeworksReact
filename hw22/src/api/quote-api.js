import axios from "axios";

const quoteIsntance = axios.create({
    baseURL: 'https://zenquotes-proxy.onrender.com/api/random'
})

export const getQuoteData = async () => {
    const { data } = await quoteIsntance.get('/');
    return data;
}