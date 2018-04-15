import React from 'react';
import GenerateReport from './GenerateReport';
import ImportantValuesContainer from './ImportantValuesContainer';
import Managers from './Managers'

const DashboardMain = () => {
  return (
    <div className="dashboard__main main">
      <GenerateReport />
      <ImportantValuesContainer />
      <Managers parent="main" number={5}/>
    </div>
  )
}

export default DashboardMain;