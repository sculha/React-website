import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './styles/common.scss';

const root = createRoot(document.getElementById("root"));
root.render(
    <App />
);
reportWebVitals();
