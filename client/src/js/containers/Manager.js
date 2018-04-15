import React from 'react';


const Manager = (data) => {
  return (
    <div className="managers__manager manager">
      <div className="manager__hover">
        <a href={`/${data.data.name}/message`} className="manager__option manager__option--first">
          <img src="/images/icons/chat.png" alt="chat" className="manager__icon"/>
        </a>
        <a href={`/${data.data.name}/work`} className="manager__option manager__option--second">
          <img src="/images/icons/note-desk.png" alt="note-desk" className="manager__icon"/>
        </a>
        <a href={`/${data.data.name}`} className="manager__option manager__option--third">
          <img src="/images/icons/person.png" alt="person" className="manager__icon"/>
        </a>
      </div>
      <a className="manager__content" href={`${data.data.image}`}>
        <img src={data.data.image} alt="manager-img" className="manager__image"/>
        <h3 className="manager__name">{data.data.name}</h3>
        <span className="manager__branch">({data.data.branch})</span>
        <span className="manager__notification">
          <img className="manager__notification-icon" src={`/images/icons/${data.data.status}.png`} alt={data.data.status}/>
        </span>
      </a>
    </div>
  )
}

export default Manager;