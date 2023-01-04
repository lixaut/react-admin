import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// 状态管理
import { Provider } from 'react-redux';
import store from 'store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
