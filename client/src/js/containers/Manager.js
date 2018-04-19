import React from 'react';
import {Link} from 'react-router-dom';


const Manager = ({data, parent, handleBtn}) => {
  return (
    <div className={`${parent}__manager manager`} data-id={data.id}>
      <div className="manager__hover">
        <a href={`/${data.id}/message`} className="manager__option manager__option--first">
          <img src="/images/icons/chat.png" alt="chat" className="manager__icon"/>
        </a>
        <a href={`/${data.id}/work`} className="manager__option manager__option--second">
          <img src="/images/icons/note-desk.png" alt="note-desk" className="manager__icon"/>
        </a>
        <Link to={`/profile/${data.id}`} className="manager__option manager__option--third">
          <img src="/images/icons/person.png" alt="person" className="manager__icon"/>
        </Link>
      </div>
      <a className="manager__content" href={`${data.image}`}>
        <img src={data.image} alt="manager-img" className="manager__image"/>
        <h3 className="manager__name">{data.name}</h3>
        <span className="manager__branch">({data.branch})</span>
      </a>
      <button onClick={e => handleBtn(e)} className="manager__notification">
        <img className="manager__notification-icon" src={`/images/icons/${data.status}.png`} alt={data.status}/>
      </button>
    </div>
  )
}

export default Manager;