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
        <div className='calc-container'>
            <div className="res">
                <p className="expression">
                    {expression || '0'}
                </p>
                <p className="ev">
                    {Math.round(Number(eval(ev)))}
                </p>

            </div>
            <div className="operators">
                <button className="op" onClick={() => {
                    setExpression('')
                    setEv('0')
                    setLastNum('')
                }}>Ac</button>
                <button className="op" onClick={() => {
                    setExpression('')
                    setEv('0')
                    setLastNum('')
                }}>del</button>
                <button className="op" onClick={() => {
                    handleClick("%")
                }}>%</button>
                <button className="op" onClick={() => {
                    handleClick("/")
                }}>/</button>
            </div>
            <div className="main">

                <div className="numbers">
                    {
                        [7,8,9,4,5,6,1,2,3,"00",0,"."].map((num, index) => {
                            return (
                                <button key={index} className="num" onClick={() => {
                                    setExpression(expression + num)
                                    setEv(expression + num)
                                    setLastNum(lastNum + num)
                                }}>{num}</button>

                            )
                        })
                    }
                </div>
                <div className="side">
                    <button className="op" onClick={() => {
                        handleClick("*")
                    }}>x</button>
                    <button className="op" onClick={() => {
                        handleClick("-")
                    }}>-</button>
                    <button className="op" onClick={() => {
                        handleClick("+")
                    }}>+</button>
                    <button style={{color:'orange'}} className='op' onClick={() => {
                        setExpression(eval(expression))
                    }}>=</button>
                </div>
            </div>
        </div>
    )
}
export default Calcul
