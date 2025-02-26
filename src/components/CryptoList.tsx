import React from 'react';
import {List, Card} from "antd";
import {CryptoCurrency} from "../types/cryptoTypes";

const CryptoList:React.FC<CryptoCurrency> = ({...item}) => {

    return (
        // <List
        //     grid={{
        //         gutter: 16,
        //         xs: 1,
        //         sm: 2,
        //         md: 4,
        //         lg: 4,
        //         xl: 6,
        //         xxl: 3,
        //     }}
        //     dataSource={[item]}
        //     renderItem={(item) => (
        //         <List.Item>
        //             <Card title={item.id}></Card>
        //         </List.Item>
        //     )}
        // />
        <Card
            title={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={crypto.icon} alt={crypto.name} width={24} style={{ marginRight: 8 }} />
                    {crypto.name}
                </div>
            }
            extra={
                <Tag color={crypto.priceChange1d > 0 ? 'green' : 'red'}>
                    {crypto.priceChange1d.toFixed(2)}%
                </Tag>
            }
        >
            <p>Price: ${crypto.price.toLocaleString()}</p>
            <p>Market Cap: ${crypto.marketCap.toLocaleString()}</p>
            <p>24h Volume: ${crypto.volume.toLocaleString()}</p>
        </Card>
    );
};

export default CryptoList;