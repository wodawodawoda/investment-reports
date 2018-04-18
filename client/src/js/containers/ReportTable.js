import React from 'react';
import Manager from './Manager'


// TODO: \\Dispath fetched data to redux or\\ setup web-socket for google-sheets


const ReportTable = ({data, parent, selected, users}) => {
  console.log(users)
  if(data[0] === undefined)  data[0] = [] // Takie rozwiązanie nie za bardzo mi się podoba
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

  const toBody = data.map((val, idx) => {
    if(idx === 0) return null
    const indexes = selected.map((val) => {
      return data[0].indexOf(val)
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
  // if (data.hasErrored) {
  //   return <p>Sorry! There was an error loading the items</p>;
  // }
  // if (data.isLoading) {
  //   return <p>Loading…</p>;
  // }
  return (
    <table>
      <thead>
        <tr>
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

export default ReportTable;