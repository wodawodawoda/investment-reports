import React from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/app.sass';
import '../../styles/normalize.css';
import Dashboard from './Dashboard';
import Reports from './Reports';
// import Settings from './Settings';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Topbar/>
      <Dashboard />
      {/*<Reports />*/}
      {/*<Settings />*/}
    </div>
  )
}

export default hot(module)(App);

