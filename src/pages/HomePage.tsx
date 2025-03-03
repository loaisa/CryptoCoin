import React, { useEffect, useState } from 'react';


import {CryptoCurrency} from "../types/cryptoTypes";
import {fetchCryptos } from "../service/cryptoService";
import CryptoList from "../components/CryptoList";
import SearchCrypto from "../components/SearchCrypto";
import InfiniteScroll from "react-infinite-scroll-component";
import {Spin} from "antd";

const ContentPage: React.FC = () => {
    const [cryptos, setCryptos] = useState<CryptoCurrency[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1)
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>('');


    const handleSearch = async (query: string) => {
        setLoading(true);
        const data = await fetchCryptos(1, query); // Загружаем данные с учетом поискового запроса
        setCryptos(data); // Обновляем список криптовалют
        setLoading(false);
    };

    const loadMoreCryptos = async () => {

        const newCryptos = await fetchCryptos(page, searchQuery);
        if (newCryptos.length === 0) {
            setHasMore(false);
        } else {
            setCryptos([...cryptos, ...newCryptos]); // Добавляем новые данные к существующим
            setLoading(false);
            setPage(page + 1);
        }
    };

    useEffect(() => {
        const loadCryptos = async ()=>{
            const data = await fetchCryptos(page, searchQuery);
            setCryptos(data)
            setLoading(false)
            setPage(page + 1)

        }
        loadCryptos();
    }, []);

    if (loading) {
        return <Spin size="large" />;
    }
    return (
        <div style={{ padding: '24px' }}>
            <h1>Crypto Tracker</h1>
            <SearchCrypto onSearch={handleSearch}/>
            <InfiniteScroll
                dataLength={cryptos.length}
                next={loadMoreCryptos}
                hasMore={hasMore}
                loader={<Spin size="large" />}
            >
                <CryptoList item={cryptos} />
            </InfiniteScroll>
        </div>
    );
};

export default ContentPage;