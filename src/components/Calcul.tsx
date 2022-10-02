import React, { useEffect, useState } from 'react'
const parStack:string[] = []
const Calcul: React.FC = () => {
    const [expression, setExpression] = useState<string>('')
    const [ev, setEv] = useState<number>(0)
    const [lastNum, setLastNum] = useState<string>('')
    useEffect(() => {
        /* if (["+", "-", "*", "/", "%", "(",")","."].includes(expression[expression.length - 1]) || expression.length < 1) {
  *     return
  * } */
        try {
            let res = eval(expression)
            setEv(res)
        } catch (err) {
            console.log(err)
        }
        if (expression === '') {
            setEv(0)
        }
    }, [expression])

    const handleClick = (val: string) => {
      if (val === ')') {
        if (expression[expression.length -1] === '(') return; 
        if (parStack.length < 1) {
          return
        } else {
            parStack.pop()
        }
      }
        if (val === '.') {
            if (lastNum.includes('.')) {
                return
            }
            setLastNum(lastNum + '.')
        } else {
            setLastNum('')
        }
        if (["*", "/"].includes(val) && expression === '') {
            return
        }
        if (["+", "*", "/"].includes(expression[expression.length - 1]) && val === "-") {
            console.log('hi')
        } else if (val === "(" && !["+", "-", "*", "/", "%","(", "."].includes(expression[expression.length - 1])) {
          return
        } else if (val == '(') {
          parStack.push(val)
            console.log('hi')
        } else if (["+", "-", "*", "/", "%", "."].includes(expression[expression.length - 1])) {
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
                    {ev}
                </p>

            </div>
            <div className="operators">
                <button className="op" onClick={() => {
                    setExpression('')
                    setEv(0)
                    setLastNum('')
                }}>Ac</button>
                <button className="op" onClick={() => {
                    setExpression(expression.slice(0, expression.length - 1))
                    setLastNum(lastNum.slice(0, lastNum.length - 1))
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
                        [7, 8, 9, 4, 5, 6, 1, 2, 3, 'special', 0, "."].map((num, index) => {
                            if (num === 'special') {
                                return (
                                    <div key={index} className="paranthesis">
                                        <button style={{ color: 'orange' }} onClick={() => {
                                            handleClick('(')
                                        }}>{"("}</button>
                                        <button style={{ color: 'orange' }} onClick={() => {
                                            handleClick(')')
                                        }}>{")"}</button>
                                    </div>
                                )
                            }
                            return (
                                <button key={index} className="num" onClick={() => {
                                    setExpression(expression + num)
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
                    <button style={{ color: 'orange' }} className='op' onClick={() => {
                        setExpression(eval(expression))
                    }}>=</button>
                </div>
            </div>
        </div>
    )
}
export default Calcul
