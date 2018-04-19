import React from 'react';
import Managers from './Managers';
import ReportTable from './ReportTable'

class Reports extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: []
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
  handleBtn = e => {
    const id = e.target.offsetParent.dataset.id;
    if(this.state.selected.includes(id)) {
      e.target.classList.remove("selected")
      this.setState({
        selected: this.state.selected.filter((val) => val !== id)
      })
    } else {
      e.target.classList.add("selected")
      this.setState({
        selected: [...this.state.selected, id]
      })
    }
  }
  render() {
    return (
      <div className="reports">
        <Managers parent="reports" number={7} handleBtn={this.handleBtn}/>
        <ReportTable parent="reports"
                     selected={this.state.selected}
                     data={this.props.items}
                     users={this.props.users}/>
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