import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter, Routes, Route} from "react-router";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(

    <BrowserRouter basename = "/CryptoCoin/">
        <App  />
    </BrowserRouter>
);
