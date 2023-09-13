import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Assets/Styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import TodoApiState from './context/todoApi/todoApiState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApiState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodoApiState>
  </React.StrictMode>
);
