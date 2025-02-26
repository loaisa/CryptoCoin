import React from 'react';
import { Layout } from 'antd';
import '../src/styles/global.css'
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import AppSider from "./components/AppSider";




const App: React.FC = () => {
    return (
        <Layout >
            <AppHeader/>
            <Layout>
                <AppSider/>
                <AppContent/>
            </Layout>
        </Layout>
    );
};

export default App;