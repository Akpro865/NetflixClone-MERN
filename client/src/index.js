import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import App2 from './App2'
import store from './features/store'
import { Provider } from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
      <App2 />
    </Provider>,
  document.getElementById('root')
);