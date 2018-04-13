import React from 'react';
import UsersOnline from './UsersOnline'

// redux
const date = new Date()
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const Topbar = () => {
  return (
    <header className="topbar">
      <UsersOnline parent="topbar" />
      <span className="topbar__date">
        {`${day}${month},${year}`}
      </span>
    </header>
  )
}

export default Topbar