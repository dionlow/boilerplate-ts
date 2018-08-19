import * as React from 'react';
import { render } from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { Store, createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const store: Store<StoreState>= createStore(
  enthusiasm, 
    { enthusiasmLevel: 1,
      languageName: 'TypeScript'
    }
  );

render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
