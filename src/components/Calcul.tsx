import React, { useState } from 'react'
const Calcul: React.FC = () => {
  const [expression, setExpression] = useState<string>('')
    const [ev, setEv] = useState<string>('0')
    const [lastNum, setLastNum] = useState<string>('')
  const handleClick = (val:string) => {
    if (val === '.') {
        if (lastNum.includes('.')) {
          return
        }
      setLastNum(lastNum + '.')
    } else {
      setLastNum('')
    }

      if (["+", "-", "*", "/","."].includes(expression[expression.length - 1])) {
        return
    }
      setExpression(expression + val)
  }
    return (
        <>
            <button className="op" onClick={() => {
              handleClick("/")
            }}>/</button>
            <button className="op" onClick={() => {
                handleClick("*")
            }}>*</button>
            <button className="op" onClick={() => {
                handleClick("-")
            }}>-</button>
            <button className="op" onClick={() => {
                handleClick("+")
            }}>+</button>
            <button className="op" onClick={() => {
                handleClick(".")
            }}>{"."}</button>
      <br />
            {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => {
                  return(
                      <button key={index} className="num" onClick={() => {
                        setExpression(expression + num)
                        setEv(expression + num)
                        setLastNum(lastNum + num)
                      }}>{num}</button>

                  )
                })
            }
            <br />
            <button onClick={()=>{
              setExpression('')
              setEv('0')
              setLastNum('')
            }}>clear</button>
            {/* <button onClick={() => {
                setExpression(eval(expression))
            }}>=</button> */}
            <br />
            {`${expression}(${eval(ev)})`}
            {lastNum}
        </>
    )
}
export default Calcul
