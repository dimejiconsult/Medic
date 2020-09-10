import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginLayout from './components/Dashboard/LoginLayout';
import MainApp from './components/Main/MainApp';
import Login from './components/Dashboard/Login';
import Register from './components/Dashboard/Register';



function App(match) {
  return (
    <>
      <Switch>
        <LoginLayout>
          <Route path='/login' component={Login} />
          <Route path='/register'component={Register} />
        </LoginLayout>
        <Layout>
          <Route exact={true} path='/' component={MainApp} />
        </Layout>
      </Switch>
    </>

  );
}

export default App;
