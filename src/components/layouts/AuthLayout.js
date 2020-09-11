import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {RegHeader}  from '../auth/RegHeader';
import LoginFooter  from '../auth/LoginFooter';
import { LoginPage, PatientReg, DoctorReg, CompanyReg } from '../auth'
import PropTypes from 'prop-types';


class AuthLayout extends React.Component {

    render(){
      const { match } = this.props
      return(
        <>
                <RegHeader />
                <Switch>
                    <Route 
                        exact path={`${match.path}`}
                        render={(props) => <LoginPage {...props} /> }/>
            <div className="layout">
                    <Route path={`${match.path}/register`} component={PatientReg} />
                    <Route path={`${match.path}/doctor`} component={DoctorReg} />
                    <Route path={`${match.path}/company`} component={CompanyReg} />
                </div>
                </Switch>
        </>
      )
   }
 }

 AuthLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default AuthLayout