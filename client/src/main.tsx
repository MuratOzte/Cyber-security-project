import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Nav from './components/nav/nav.tsx';
import Attack from './components/Attack/Attack.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Providers } from './store/Provider.tsx';

const router = createBrowserRouter([
    {
        index: true,
        element: <App />,
    },
    {
        path: '/attack',
        element: <Attack />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Providers>
            <Nav />
            <RouterProvider router={router} />
        </Providers>
    </React.StrictMode>
);
