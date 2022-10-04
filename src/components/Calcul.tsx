import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BalanceContext } from '../context/BlanceContext';
import {AnimatePresence, motion} from 'framer-motion'
let parStack: string[] = []
let allowPoint = true;

const ops = ['/', '*', '-', '+', '%', '.']
const deleteLast = (str: string): string => {
    return str.slice(0, str.length - 1)
}
const checkLastLetterInArr = (str: string, arr: string[]) => {
    return arr.includes(str[str.length - 1])
}
const animations = {
    initial: { width: 0, height:0 ,
    },
    animate: { width: '300px', height: '200px',
        transition: {
          duration: .4,
            when: 'beforeChildren',
            staggerChildren: 0.3
        }
    },
    exit: { width: 0, height: 0,
        transition: {
            duration: .4,
            when: 'afterChildren',
        }
    }
}
const animations2 = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}
const Calcul: React.FC = () => {
    const { transactions, setTransactions } = useContext(BalanceContext)
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
    const [description, setDescription] = useState<string>('')


    return (
        <>
            <Link to='/dashboard'>home</Link>
            <br />
            <button onClick={() => { setOpen(!open) }}>add</button>
            <AnimatePresence>
            {open && (
            <motion.div 
                    variants={animations}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="form2">
                <motion.form
                            variants={animations2}
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (description.trim() === '') return
                    const date = new Date()
                    const variant = ev > 0 ? transactions.income : transactions.outcome;
                    const newTransaction = {
                        description,
                        amount: ev,
                        id: variant.length > 0 ? variant[0].id + 1 : 0,
                        date,
                    }
                    if (ev > 0) {
                        localStorage.setItem("transactions", JSON.stringify({ outcome: transactions.outcome, income: [newTransaction, ...transactions.income] }))
                        setTransactions({ outcome: transactions.outcome, income: [newTransaction, ...transactions.income] })
                    } else {
                        localStorage.setItem("transactions", JSON.stringify({ income: transactions.income, outcome: [newTransaction, ...transactions.outcome] }))
                        setTransactions({ income: transactions.income, outcome: [newTransaction, ...transactions.outcome] })
                    }
                    setOpen(false)
                  setDescription('')
                }}>
                    <input onChange={(e) => { setDescription(e.target.value) }} name="" type="text" value={description} />
                    <button type="submit">submit</button>
                </motion.form>
            </motion.div>
                )}</AnimatePresence>
            <div className='calc-container'>
                <div className="res">
                    <p className="expression">
                        {ev}
                    </p>
                    <p className="ev">
                        {expression || '0'}
                    </p>

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
            </div>
        </>

    )
}
export default Calcul
