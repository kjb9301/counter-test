import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import GlobalStyle from './lib/styles/globalStyles';
import * as Pages from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Pages.Main} />
            <Route path='/basket' component={Pages.Basket} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
