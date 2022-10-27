import React, { useState } from 'react'

const getNumbers = () => {
  const arr = []
  for (let i=1;i<10;i++) {
    arr.push((
      <button className="num">{i}</button>
    ))
  }

  return arr
}
const Calcul: React.FC = () => {
    return (
        <>
            <button className="op">/</button>
            <button className="op">*</button>
            <button className="op">-</button>
            <button className="op">+</button>
            {getNumbers()}
        </>
    )
}
export default Calcul
