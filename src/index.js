import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { AppContext } from './context';
import { GlobalStyle } from './theme';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <AppContext>
        <GlobalStyle />
        
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppContext>
);