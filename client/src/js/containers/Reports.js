import React from 'react';
import Managers from './Managers';
import ReportTable from './ReportTable'
const users = `{
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



class Reports extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: ["1"]
    }
  }
  componentDidMount() {
    this.props.fetchData(this.props.link);
    this.props.fetchUsers("http://localhost:3000/api/users")
  }
  // render() {
  //   if (this.props.hasErrored) {
  //     return <p>Sorry! There was an error loading the items</p>;
  //   }
  //   if (this.props.isLoading) {
  //     return <p>Loading…</p>;
  //   }
  //   console.log(this.props.items)
  //   return (
  //     <div className="main__important-values important-values">
  //       {this.torender()}
  //       <a href="/values" className="important-values__others"> > other values</a>
  //     </div>
  //   )
  // }
  handleSelect = (e) => {
    const selected = [...e.target].filter((val) => {
      return val.selected
    }).map((val) => val.value)
    this.setState({
      selected
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className="reports">
        <Managers parent="reports" number={7} />
        <ReportTable parent="reports" selected={this.state.selected} data={this.props.items} users={this.props.users}/>
        {/*TODO change select to checkboxes in Managers component*/}
        <select multiple onChange={e => this.handleSelect(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>
    )
  }
}

export default Reports;