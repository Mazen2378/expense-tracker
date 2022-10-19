import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';


let parStack: string[] = []
let allowPoint = true;
const ops = ['/', '*', '-', '+', '%', '.']

const deleteLast = (str: string): string => {
    return str.slice(0, str.length - 1)
}
const checkLastLetterInArr = (str: string, arr: string[]) => {
    return arr.includes(str[str.length - 1])
}

const Calcul: React.FC = () => {
    const [expression, setExpression] = useState<string>('')
    const [ev, setEv] = useState<number>(0)
    const [lastNum, setLastNum] = useState<string>('')
    useEffect(() => {
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
        if (checkLastLetterInArr(expression, ops) && val !== '-') return;
        if (checkLastLetterInArr(expression, ['-'])) return;
        allowPoint = true
        setExpression(expression + val)
    }

    const [open, setOpen] = useState<boolean>()


    return (
        <>
            <motion.div
                drag='y'
                dragConstraints={{
                    top: 0,
                    bottom: 0
                }}
                dragElastic={0.01}
              className='calc-container'>
                <div className="res">
                    <p className="expression">
                        {ev}
                    </p>
                    <div className="evd">
                        <p className="ev">
                            {expression || '0'}
                        </p>
                    </div>
                </div>
                <div className="operators">
                    <button className="op" onClick={() => {
                        setExpression('')
                        setEv(0)
                        setLastNum('')
                        allowPoint = true;
                        parStack = []
                    }}>Ac</button>
                    <button className="op" onClick={() => {
                        if (expression[expression.length - 1] === '.') { allowPoint = true }
                        if (expression[expression.length - 1] === '(') { parStack.pop() }
                        if (expression[expression.length - 1] === ')') { parStack.push('(') }
                        setExpression(deleteLast(expression))
                        setLastNum(deleteLast(lastNum))
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
                                                if (!allowPoint) return;
                                                if (checkLastLetterInArr(expression, ops.concat(["("]))) {
                                                    parStack.push('(')
                                                    setExpression(expression + '(')
                                                }
                                            }}>{"("}</button>
                                            <button style={{ color: 'orange' }} onClick={() => {
                                                if (!allowPoint) return;
                                                if (expression[expression.length - 1] === '(') return;
                                                if (parStack.length < 1) {
                                                    return
                                                } else {
                                                    parStack.pop()
                                                }
                                                setExpression(expression + ')')
                                            }}>{")"}</button>
                                        </div>
                                    )
                                }
                                if (num === '.') {
                                    return (
                                        <button key={index} className="num" onClick={() => {
                                            if (!allowPoint) return;
                                            allowPoint = false
                                            setExpression(expression + '.')
                                        }}>{num}</button>
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
            </motion.div>
        </>

    )
}
export default Calcul
