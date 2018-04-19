import React from 'react';
import {NavLink} from 'react-router-dom'
const DashboardNav = () => {
  return (
    <nav className="dashboard__navigation nav-dash">
      <NavLink to="/dashboard/main" className="nav-dash__path" activeClassName="nav-dash__path--active">
        <img className="nav-dash__icon" src="/images/icons/main.png" alt="home"/>
        <p className="nav-dash__link">Main</p>
      </NavLink>
      <NavLink to="/dashboard/summary" className="nav-dash__path" activeClassName="nav-dash__path--active">
        <img className="nav-dash__icon" src="/images/icons/summary.png" alt="summary"/>
        <p className="nav-dash__link">Summary Report</p>
      </NavLink>
      <NavLink to="/dashboard/archiv" className="nav-dash__path" activeClassName="nav-dash__path--active">
        <img className="nav-dash__icon" src="/images/icons/archiv.png" alt="archiv"/>
        <p className="nav-dash__link">Archiv</p>
      </NavLink>
    </nav>
  )
}

export default DashboardNav;