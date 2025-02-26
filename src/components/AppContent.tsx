import React from 'react';
import HomePage from "../pages/HomePage";
import {Layout} from "antd";

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    lineHeight: '120px',
    color: '#5b5b5b',
    backgroundColor: "white",
};
const AppContent: React.FC = () => {
    return (
        <Layout.Content style={contentStyle}>
            <HomePage />
        </Layout.Content>
    );
};

export default AppContent;