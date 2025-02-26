import React, { useEffect, useState } from 'react';

import { Spin } from 'antd';
import axios from "axios";
import {CryptoCurrency} from "../types/cryptoTypes";

const HomePage: React.FC = () => {
    const [cryptos, setCryptos] = useState<CryptoCurrency[]>([])
    const [loading, setLoading] = useState<boolean>(true);

    const API_URL = 'https://openapiv1.coinstats.app/coins';
    const API_KEY = 'TfrQ7fy/kjg1rJR8ryqPFTOSF+/PYKZDuX9rXKt8CUk='; // Замените на ваш API-ключ

    useEffect(() => {
        const loadCrypto= async (): Promise<any>=>{
            const response = await axios.get(API_URL, {
                headers:{
                    'X-API-KEY': API_KEY,
                }
            })
            console.log(response.data.result)
            setCryptos(response.data.result.map((coin: any) => ({
                id: coin.id,
                name: coin.name,
                symbol: coin.symbol,
                price: coin.price,
                marketCap: coin.marketCap,
                volume: coin.volume,
                priceChange1d: coin.priceChange1d,
                icon: coin.icon,
                rank:coin.rank
            })))
        }
        setLoading(false)
        loadCrypto()
    }, []);

    if (loading) {
        return <Spin size="large" />;
    }
    console.log(cryptos)
    return (
        <div style={{ padding: '24px' }}>
            <h1>Crypto Tracker</h1>
            {
                cryptos? <>
                    {cryptos.map((item)=>
                        <div>
                            {item.name}
                        </div>
                    )}
                </>: <p>'Загрузка'</p>
            }

        </div>
    );
};

export default HomePage;