import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as Pages from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Pages.Main} />
        <Route path='/basket' component={Pages.Basket} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
