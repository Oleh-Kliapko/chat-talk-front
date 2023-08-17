// import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { store, persistor } from './redux/store';

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="chat-talk-front">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
