import React from 'react';

const newUsers = 2
const onlineUsers = 5

const UsersOnline = ({parent}) => {
  return (
    <div className={`${parent}__users-online users-online`}>
      <span className="users-online__notification">{newUsers}</span>
      <span className="users-online__text">{onlineUsers} users online ⌄</span>
    </div>
  )
}

export default UsersOnline