import React from 'react';

const NotExist = (props) => {
  console.log(props)
  // const goBack = () => {
  //   props.history.goBack
  // }
  return (
    <div>
      <h1>This page not exist yet</h1>
      <button onClick={props.history.goBack}>Back</button>
    </div>
  )
}

export default NotExist