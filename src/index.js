import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Dashboard from '../src/login/Dashboard';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ProductDetails from '../src/features/products/ProductDetails'
import Login from '../src/login/Login';
import { store } from './app/store';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

const token = localStorage.getItem("token")
root.render(

  < Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/user/dashboard" element={token ? <Dashboard /> : <Navigate to={"/"} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='*' element={<h1>404 Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  </Provider >
);
reportWebVitals();