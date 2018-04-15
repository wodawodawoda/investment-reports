import React from 'react';
import Managers from './Managers'


// TODO: Dispath fetched data to redux or setup web-socket for google-sheets
// const getData = fetch("http://localhost:3000/api/excel")
//     .then(response => response.json())
//     .then(data => console.log(data));
//......................................
// solution for development before redux



const ReportTable = (parent) => {
  return (
    <div className={`${parent.parent}__report-table report-table`}>
      <table className="report-table__table">
        <thead>
          <tr>
            <th>Header</th>
            {/*<th>DEC2018</th>*/}
            {/*<th>DEC2018</th>*/}
            {/*<th>DEC2018</th>*/}
            {/*<th>DEC2018</th>*/}
            <Managers parent="report-table" number={4}/>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr className="break"><td colSpan={5}>Next important data section</td></tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr className="break"><td colSpan={5}>Next important data section</td></tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr className="break"><td colSpan={5}>Next important data section</td></tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        <tr>
          <td>Position</td>
          <td>50001</td>
          <td>50002</td>
          <td>50003</td>
          <td>50004</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ReportTable;