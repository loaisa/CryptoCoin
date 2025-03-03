import React from 'react';
import {Layout} from "antd";
import AppSider from "./AppSider";
import AppContent from "./AppContent";

const AppComponent = () => {
    return (
        <Layout>
            <AppSider/>
            <AppContent/>
        </Layout>
    );
};

export default AppComponent;