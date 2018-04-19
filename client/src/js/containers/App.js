import React from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/app.sass';
import '../../styles/normalize.css';
import Dashboard from './Dashboard';
import ReportsContainer from './ReportsContainer';
import SettingsContainer from './SettingsContainer';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ProfileContainer from './ProfileContainer';
// import DevTools from '../redux/DevTools'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import NotExist from './NotExist'
import DashboardSummary from './DashboardSummary'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          {/*<Route path="/" component={Sidebar}/>*/}
          {/*<Route path="/" component={Topbar}/>*/}
          <Sidebar />
          <Topbar/>
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            {/*<Route exact path="/dashboard/main" component={Dashboard}/>*/}
            {/*<Route exact path="/dashboard/summary" component={DashboardSummary}/>*/}
            {/*<Route exact path="/dashboard/archiv" component={DashboardSummary}/>*/}
            <Route exact path="/reports" component={ReportsContainer}/>
            <Route exact path="/settings" component={SettingsContainer}/>
            <Route exact path="/profile/:id" component={ProfileContainer}/>
            {/*<DevTools/>*/}
            <Route path="*" component={NotExist}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default hot(module)(App);

