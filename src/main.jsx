import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ArweaveWalletKit } from 'arweave-wallet-kit';
import App from './App'; // App component as a layout
import LandingPage from './components/landing-page';
import Game from './pages/game';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use App component as layout
    children: [
      {
        index: true, // Default route for "/"
        element: <LandingPage />,
      },
      {
        path: "game",
        element: <Game />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ArweaveWalletKit>
    <RouterProvider router={router} />
  </ArweaveWalletKit>
);
