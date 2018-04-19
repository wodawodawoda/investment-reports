import React from 'react';



const newUsers = 2
// TODO get onlineUsers from redux // socket.io
const onlineUsers = [1,2,3,4,5,6,7,8]

const UsersOnline = ({parent}) => {
  return (
    <div className={`${parent}__users-online users-online`}>
      <span className="users-online__notification">{newUsers}</span>
      <span className="users-online__text">{onlineUsers.length} users online ⌄</span>
      <ul className="users-online__list">
        <li className="users-online__item">John Doe</li>
        <li className="users-online__item">Long-Surname-Man</li>
        <li className="users-online__item">John Doe</li>
        <li className="users-online__item">John Doe</li>
        <li className="users-online__item">Long-Surname-Man</li>
        <li className="users-online__item">John Doe</li>
        <li className="users-online__item">John Doe</li>
        <li className="users-online__item">John Doe</li>
      </ul>
    </div>
  )
}

export default UsersOnline