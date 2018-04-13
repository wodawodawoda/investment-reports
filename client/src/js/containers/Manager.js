import React from 'react';


const Manager = (data) => {
  console.log(data.data)
  return (
    <div className="managers__manager manager">
      <img src={data.data.image} alt="manager-img" className="manager__image"/>
      <h3 className="manager__name">{data.data.name}</h3>
      <span className="manager__branch">({data.data.branch})</span>
      <span className="manager__notification">
        <img className="manager__icon" src={`/images/icons/${data.data.status}.png`} alt={data.data.status}/>
      </span>
    </div>
  )
}

export default Manager;