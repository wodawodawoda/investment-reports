import React from 'react';
import GenerateReport from './GenerateReport';
import ImportantValues from './ImportantValues';
import Managers from './Managers'

const DashboardMain = () => {
  return (
    <div className="dashboard__main main">
      <GenerateReport />
      <ImportantValues />
      <Managers parent="main" number={5}/>
    </div>
  )
}

export default DashboardMain;