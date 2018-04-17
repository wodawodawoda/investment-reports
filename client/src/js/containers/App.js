import React from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/app.sass';
import '../../styles/normalize.css';
import Dashboard from './Dashboard';
import ReportsContainer from './ReportsContainer';
import SettingsContainer from './SettingsContainer';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
// import DevTools from '../redux/DevTools'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Topbar/>
        <Dashboard />
        {/*<ReportsContainer />*/}
        {/*<SettingsContainer />*/}
        {/*<DevTools/>*/}
      </div>
    )
  }
}

export default hot(module)(App);

