import React from 'react';
import ValueBox from './ValueBox'

class ImportantValues extends React.Component {
  componentDidMount() {
    this.props.fetchData('http://localhost:3000/api/excel')
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    console.log(this.props.items)
    return (
      <div className="main__important-values important-values">
        {this.torender()}
        <a href="/values" className="important-values__others"> > other values</a>
      </div>
  )}
  torender(){
    console.log(this.props)
    return this.props.items.map((val, idx)=> {
      if(idx < 4) {
        return <ValueBox key={idx} data={val}/>
      }
    })
  }
}

export default ImportantValues;
