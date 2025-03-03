import React from 'react';
import {List, Card, Image, Tag} from "antd";
import {CryptoCurrency} from "../types/cryptoTypes";

interface CryptoListProps {
    item: CryptoCurrency[];
}

const CardStyle: React.CSSProperties = {
    textAlign:"left",
    fontFamily: "Julius Sans One, serif",
    fontWeight:'400',
    letterSpacing:'2px',
    overflow:"hidden"
}



const CryptoList:React.FC<CryptoListProps> = ({item}) => {

    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 3,
            }}
            dataSource={item}
            renderItem={(item) => (
                <List.Item>
                    <Card
                        style={CardStyle}
                        title={
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={item.icon} alt={item.name} width={24} style={{ marginRight: 8 }} />
                                {item.name}
                            </div>
                        }
                        extra={
                            <Tag color={item.priceChange1d > 0 ? 'green' : 'red'}>
                                {item.priceChange1d.toFixed(2)}%
                            </Tag>
                        }
                    >
                        <p>Price: {item.price.toLocaleString()}$</p>
                        <p>Market Cap:{item.marketCap.toLocaleString()}$</p>
                        <p>24h Volume: {item.volume.toLocaleString()}$</p>
                        <h3>Rank:{item.rank}</h3>
                    </Card>
                </List.Item>
            )}
        />

    );
};

export default CryptoList;