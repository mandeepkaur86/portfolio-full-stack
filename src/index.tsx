
import { Metric } from 'web-vitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );
}

const logWebVitals = (metrics: Metric[]) => {
  console.log(metrics);
};

reportWebVitals(logWebVitals);


