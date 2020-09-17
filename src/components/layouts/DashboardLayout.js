import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dashboard } from '../dashboard/Dashboard'
// import { PageA, PageB, PageC } from '../pages'
import PropTypes from 'prop-types';

class DashboardLayout extends React.Component {

    render(){
      const { match } = this.props
      return(
        <>
                <Switch>
                    <Route 
                        exact path={`${match.path}`}
                        render={(props) => <Dashboard {...props} /> }/>
                    {/* <Route path={`${match.path}/pagea`} component={PageA} />
                    <Route path={`${match.path}/pageb`} component={PageB} />
                    <Route path={`${match.path}/pagec`} component={PageC} /> */}
                </Switch>
        </>
      )
   }
 }

 DashboardLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default DashboardLayout