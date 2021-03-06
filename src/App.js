import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthLayout from './components/layouts/AuthLayout'
import HomeLayout from './components/layouts/HomeLayout'
import './components/layouts/styles.css'
import DashboardLayout from './components/layouts/DashboardLayout'
class App extends React.Component {

    render(){

      return(
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={(props) => <HomeLayout {...props} /> } />
              <Route path='/login-signup' render={(props) => <AuthLayout {...props} /> } />
              <Route path='/dashboard' render={(props) => <DashboardLayout {...props} /> } />
            </Switch>
          </BrowserRouter>
        </div>
      )
   }

 }

export default App