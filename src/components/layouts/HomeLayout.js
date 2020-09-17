import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Header} from "../header/Header";
import FooterTop from "../Main/FooterTop";
import MainApp from "../Main/MainApp";

export default function HomeLayout(props) {
    const {match} = props;
    return (
        <div className="App">
      <div class="super_container">
        <Header />
          <FooterTop />
        <Switch>
          <Route 
            exact path={`${match.path}`}
              render={(props) => <MainApp {...props} /> }/>
          </Switch>
      </div>
    </div>
    )
}
