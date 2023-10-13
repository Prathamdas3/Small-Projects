import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import TodoApiState from './context/todoApi/todoApiState.jsx';
import ApiContext from './context/apiContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiContext>
      <TodoApiState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TodoApiState>
    </ApiContext>
  </React.StrictMode>
);
