import React from 'react';
import { Layout } from 'antd';
import '../src/styles/global.css'

import AppHeader from "./components/AppHeader";
import {Route, Routes} from "react-router";
import AppComponent from "./components/AppComonent";
import LoginPage from "./pages/LoginPage";





const App: React.FC = () => {
    return (


        <Layout >
            <AppHeader/>
            <Routes>
                <Route path='/' element={<AppComponent/>}/>
                <Route path='login' element={<LoginPage/>}/>
            </Routes>
        </Layout>
    );
};

export default App;