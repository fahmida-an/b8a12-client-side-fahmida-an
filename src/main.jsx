import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import {HelmetProvider} from "react-helmet-async";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
  <HelmetProvider>
  <Toaster />
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </HelmetProvider>
  </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

