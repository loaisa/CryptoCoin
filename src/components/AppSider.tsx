import React from 'react';
import {Layout} from "antd";

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};
const AppSider:React.FC = () => {
    return (
        <Layout.Sider style={siderStyle}/>
    );
};

export default AppSider