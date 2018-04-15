import React from 'react';
import Managers from './Managers';
import ReportTable from './ReportTable'



const Reports = () => {
  return (
    <div className="reports">
      <Managers parent="reports" number={7} />
      <ReportTable parent="reports"/>
    </div>
  )
}

export default Reports;