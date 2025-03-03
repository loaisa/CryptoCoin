import axios from 'axios';
import { CryptoCurrency } from '../types/cryptoTypes';

const API_URL =  process.env.REACT_APP_API_URL!
const API_KEY = process.env.REACT_APP_API_KEY


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-KEY': API_KEY
    }
};

export const fetchCryptos = async (
    page: number = 1,
    searchQuery: string
): Promise<CryptoCurrency[]>=>{

    const response = await axios.get(`${API_URL}?page=${page}&name=${searchQuery}`, options)

    return response.data.result.map((coin:any)=>({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        price: coin.price,
        marketCap: coin.marketCap,
        volume: coin.volume,
        priceChange1d: coin.priceChange1d,
        icon: coin.icon,
        rank:coin.rank
    }))

}
