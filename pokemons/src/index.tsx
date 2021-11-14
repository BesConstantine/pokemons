import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { Table } from './components/Table';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Table />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
