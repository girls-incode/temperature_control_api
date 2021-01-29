import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router';
import { Provider } from 'react-redux';
import Login from './components/login/Login';
import Sensors from './components/sensors/Sensors';
import store from './store/store';
import AppLayout from './layouts/AppLayout';
import { isLoggedIn } from './utils/checkAuth';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppLayout>
        <Switch>
          <Route path='/' exact render={() => isLoggedIn() ? <Redirect to='/sensors' /> : <Redirect to='/login' />} />
          <Route path='/sensors' exact component={Sensors} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </AppLayout>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
