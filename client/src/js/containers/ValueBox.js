import React from 'react';

const ValueBox = (data) => {
  return (
    <div className="important-values__wrapper">
      <a href={`/${data.data.label}`} className="important-values__box important-values__box--first">
        <img src="/images/icons/wath-graph.png" alt="graph" className="important-values__chart"/>
        <span className="important-values__link">View chart</span>
      </a>
      <div className="important-values__box important-values__box--second">
        <span className="important-values__value">$ {data.data.value}</span>
        <span className="important-values__label">{data.data.label}</span>
      </div>
    </div>
  )
}

export default ValueBox;
