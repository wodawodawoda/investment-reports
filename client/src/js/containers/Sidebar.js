import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const notification = '9'

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__box sidebar__box--client">
        <img src="/images/client.jpg"
             alt="client"
             className="sidebar__client-image"/>
        <span className="sidebar__notification">{notification}</span>
      </div>
      <NavLink to='/dashboard' activeClassName="sidebar__box--active" className="sidebar__box sidebar__box--dashboard">
          <img src="/images/icons/dashboard.png"
               alt="dashboard"
               className="sidebar__icon"/>
          <span className="sidebar__option">Dashboard</span>
          <span className="sidebar__notification">{notification}</span>
      </NavLink>
      <NavLink to='/reports' activeClassName="sidebar__box--active" className="sidebar__box sidebar__box--reports">
        <img src="/images/icons/reports.png"
             alt="reports"
             className="sidebar__icon"/>
        <span className="sidebar__option">Reports</span>
        <span className="sidebar__notification">{notification}</span>
      </NavLink>
      <NavLink to='/settings' activeClassName="sidebar__box--active" className="sidebar__box sidebar__box--settings" >
        <img src="/images/icons/settings.png"
             alt="settings"
             className="sidebar__icon"/>
        <span className="sidebar__option">Settings</span>
        <span className="sidebar__notification">{notification}</span>
      </NavLink>
      <div className="sidebar__box sidebar__box--logout">
        <img src="/images/icons/logout.png"
             alt="logout"
             className="sidebar__icon"/>
        <span className="sidebar__option">Logout</span>
      </div>
    </nav>
  )
}

export default Sidebar