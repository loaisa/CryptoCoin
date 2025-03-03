import React from 'react';
import ContentPage from "../pages/HomePage";
import {Layout} from "antd";


const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    lineHeight: '120px',
    color: '#5b5b5b',
    backgroundColor: '#cecece',
};
const AppContent: React.FC = () => {
    return (
        <Layout.Content style={contentStyle}>
           <ContentPage/>
        </Layout.Content>
    );
};

export default AppContent;