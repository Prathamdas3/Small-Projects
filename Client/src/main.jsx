import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Assets/Styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import TodoApiState from './context/todoApi/todoApiState.jsx';
import ApiState from './context/api/apiState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiState>
      <TodoApiState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TodoApiState>
    </ApiState>
  </React.StrictMode>
);
