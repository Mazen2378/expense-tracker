import { format} from 'date-fns';
import { motion } from 'framer-motion'
import React, {useContext, useState} from 'react'
import { BalanceContext } from '../context/BlanceContext';
import {MdMore, MdOutlineCancel, MdOutlineLocalCafe, MdOutlineLocalGroceryStore} from 'react-icons/md' 
import { Transaction } from '../types';


const modalAnimation = {
    initial: {
        width: 0,
        height: 0,
    },
    animate: {
        width: '100px', height: '50px',
        transition: {
            duration: .8,
            when: 'beforeChildren',
            staggerChildren: 0.3
        }
    },
    exit: {
        width: 0, height: 0,
        transition: {
            duration: .8,
            when: 'afterChildren',
        }
    }
}
const Income:React.FC<{t:Transaction}> = ({t}) => {
    const [options, setOptions] = useState(false)
  return (
                      <div className="expense-container">
                          <button>{t.id % 2 == 0 ? (
                              <MdOutlineLocalCafe className='hi' />
                          ):(
                              <MdOutlineLocalGroceryStore />
                            )}</button>
                          <div className="details">
                              <p className='descriptions'>
                                  {t.description}
                              </p>
                              <p className='method'>
                                 {'cash'}
                              </p>
                          </div>
                          <div className="description">
                              <p className='positive'>
                                  {
                                   t.amount % 1 === 0 ? `${t.amount}.00`: t.amount
                                  }
                              </p>
                              <p className="e-date">
                                  {format(new Date(t.date), "yyy.M.dd | hh:mm aaaaa.'m'")}
                              </p>
                          </div>
                          <div onClick={() => {
                            setOptions(!options)
                          }} className='dots'>
                              <div className="dot">
                                  .
                              </div>
                              <div className="dot">
                                  .
                              </div>
                              <div className="dot">
                                  .
                              </div>

                              {options ? (
                              <motion.div
                                      variants={modalAnimation}
                                      initial="initial"
                                      animate="animate"
                                      exit="exit"
                                className='options'>
                                       {/* <div onClick={()=>{
                                          const newIncome = transactions.income.filter((trans) => trans.id !== t.id)
                                          setTransactions({ ...transactions, income: newIncome })
                                      }} className="option">
                                          <div className="icon">
                                              <MdOutlineCancel />
                                          </div>
                                      <p>
                                        Delete
                                      </p>
                                      </div> */}
                              </motion.div>
                              ):''}
                          </div>
                      </div>
                  )
}
const RecentTransactions:React.FC = (e,) => {
    const { transactions, setTransactions } = useContext(BalanceContext)
  return (
    <>
          <div className='dash-panel'>
            <h2>
              Last Transactions
            </h2>
              <div className="transactions">
                  <p>
                      income
                  </p>
              {transactions.income.slice(0,4).map((t,index) => {
                  return (
                    <Income t={t} key={index} />
                  )
              })}
                  <p>
                      outcome
                  </p>
              {transactions.outcome.slice(0,4).map((t,index) => {
                const date = new Date(t.date)
                  return (
                      <div className="expense-container" key={index}>
                        <button onClick={()=> {
                          }}>{t.id % 2 == 0 ? (
                              <MdOutlineLocalCafe className='hi' />
                          ) : (
                              <MdOutlineLocalGroceryStore />
                          )}</button>
                          <p>
                              {t.description}
                          </p>
                          <div className="description">
                              <p className='negative'>
                                  {
                                   t.amount % 1 === 0 ? `${t.amount}.00`: t.amount
                                  }
                              </p>
                              <p>
                                  {format(date, "yyy.mm.dd | hh:mm aaaaa.'m'")}
                              </p>
                          </div>
                          <div onClick={()=>{
                              const newOutcome = transactions.outcome.filter((trans) => trans.id !== t.id)
                              setTransactions({ ...transactions, outcome: newOutcome })
                          }} className='dots'>
                              <div className="dot">
                                .
                              </div>
                              <div className="dot">
                                  .
                              </div>
                              <div className="dot">
                                  .
                              </div>
                          </div>
                      </div>
                  )
              })}
              </div>
          </div>
      </>

  )
}

export default RecentTransactions
