import React from 'react';
import DashboardNav from './DashboardNav'
import DashboardMain from './DashboardMain'
import DashboardSummary from './DashboardSummary'
import DashboardArchiv from './DashboardArchiv'
import {Route} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNav />
      <Route path="/dashboard/main" component={DashboardMain}/>
      <Route path="/dashboard/summary" component={DashboardSummary}/>
      <Route path="/dashboard/archiv" component={DashboardArchiv}/>
      {/*<DashboardMain />*/}
      {/*<DashboardSummary />*/}
      {/*<DashboardArchiv />*/}
    </div>
  )
}

export default Dashboard;