import React from 'react';

// server or redux
const progress = '10%';

const DashboardMain = () => {
  return (
    <div className="main__generate-report generate-report">
      <div className="generate-report__line">
        <span className="generate-report__progress">{progress}</span>
        <span className="generate-report__label">Monthly Financial Summary Report</span>
      </div>
      <button className="generate-report__btn">generate report</button>
    </div>
  )
}

export default DashboardMain;