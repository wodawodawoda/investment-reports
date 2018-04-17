import React from 'react';
import Manager from './Manager';

// To database // redux initial state
const data = `{
  "managers": [
  {
    "id": "1",
    "name": "John Doe",
    "image": "/images/user1.jpg",
    "branch": "Chicago - Illinois",
    "status": "finished"
  },
  {
    "id": "2",
    "name": "Long-Surname-Man",
    "image": "/images/user2.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "3",
    "name": "John Doe",
    "image": "/images/user3.jpg",
    "branch": "Chicago - Illinois",
    "status": "finished"
  },
  {
    "id": "4",
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "5",
    "name": "Long-Surname-Man",
    "image": "/images/user5.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "6",
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "7",
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "8",
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "9",
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  }
  ]
}`



class Managers extends React.Component {
  torender = () => JSON.parse(data).managers.map((val, idx)=> {
    return idx < this.props.number ? <Manager key={idx} data={val} /> : null
  })

  render() {
    return this.write()
  }

  write() {
    if(this.props.parent === "report-table") {
      return this.torender()
    } else {
      return (
        <div className={`${this.props.parent}__managers managers`}>
          {this.torender()}
          <a href="/managers" className="managers__all"> > all</a>
        </div>
      )
    }
  }
}

export default Managers;