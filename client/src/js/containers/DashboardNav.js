import React from 'react';

const DashboardNav = () => {
  return (
    <nav className="dashboard__navigation nav-dash">
      <div className="nav-dash__path">
        <img className="nav-dash__icon" src="/images/icons/main.png" alt="home"/>
        <a href="/dashboard/main" className="nav-dash__link">Main</a>
      </div>
      <div className="nav-dash__path">
        <img className="nav-dash__icon" src="/images/icons/summary.png" alt="summary"/>
        <a href="/dashboard/summary" className="nav-dash__link">Summary Report</a>
      </div>
      <div className="nav-dash__path">
        <img className="nav-dash__icon" src="/images/icons/archiv.png" alt="archiv"/>
        <a href="/dashboard/archiv" className="nav-dash__link">Archiv</a>
      </div>
    </nav>
  )
}

export default DashboardNav;