import React from 'react';
import DashboardNav from './DashboardNav'
import DashboardMain from './DashboardMain'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNav />
      <DashboardMain />
      {/*<DashboardSummary />*/}
      {/*<DashboardArchiv />*/}
    </div>
  )
}

export default Dashboard;