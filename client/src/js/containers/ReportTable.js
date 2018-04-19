import React from 'react';
import Manager from './Manager'


// TODO: \\Dispath fetched data to redux or\\ setup web-socket for google-sheets


const ReportTable = ({data= [[1,2,3]], parent, selected, users}) => {
  const toHeader = users.map((val, idx) => {
    if(selected.includes(val.id)) { // Tutaj dostaję error items[0] not defined
      return (
        <th key={idx}>
          <Manager data={val} />
        </th>
      )
    }
    return null
  })

  const toBody = data.map((val, idx, arr) => {
    if(idx === 0) return null
    const indexes = selected.map((val) => {
      return arr[0].indexOf(val)
    })
    return (
        <tr key={idx}>
          <td className="report-table__label">{val[0]}</td>
          {val.map((val, idx) => {
            if(indexes.includes(idx)) {
              return <td key={idx}>{val}</td>
            }
          })}
        </tr>
    )
  })
  if(data == 0)  {
    return null
  } else {
    return (
      <table>
        <thead>
          <tr style={{height: '200px'}}>
            <th>{data[0][0]}</th>
            {toHeader}
          </tr>
        </thead>
        <tbody>
          {toBody}
        </tbody>
      </table>
    )
  }
}

export default ReportTable;