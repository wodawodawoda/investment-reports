import React from 'react';
import Manager from './Manager';


const data = `{
  "managers": [
  {
    "name": "John Doe",
    "image": "/images/user1.jpg",
    "branch": "Chicago - Illinois",
    "status": "finished"
  },
  {
    "name": "Long-Surname-Man",
    "image": "/images/user2.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "name": "John Doe",
    "image": "/images/user3.jpg",
    "branch": "Chicago - Illinois",
    "status": "finished"
  },
  {
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "name": "Long-Surname-Man",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  }
  ]
}`

const torender = JSON.parse(data).managers.map((val, idx)=> {
  return idx < 5 ? <Manager key={idx} data={val} /> : null

})

const Managers = () => {
  return (
    <div className="main_managers managers">
      {torender}
      <a href="/managers" className="managers__all"> > all</a>
    </div>
  )
}

export default Managers;