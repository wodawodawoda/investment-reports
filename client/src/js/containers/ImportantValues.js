import React from 'react';
import ValueBox from './ValueBox'

const data = `{
  "records": [
  {
    "value": "198376",
    "label": "Revenue"
  },
  {
    "value": "14213",
    "label": "Net income"
  },
  {
    "value": "53432",
    "label": "Income from continuing operations"
  },
  {
    "value": "5236",
    "label": "Operating (non-GAAP) earnings*"
  }
  ]
}`

const torender = JSON.parse(data).records.map((val, idx)=> {
  return <ValueBox key={idx} data={val} />
})

const ImportantValues = () => {
  return (
    <div className="main__important-values important-values">
      {torender}
      <a href="/values" className="important-values__others"> > other values</a>
    </div>
  )
}

export default ImportantValues;
