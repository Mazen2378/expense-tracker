import { format} from 'date-fns';
import React, {useContext} from 'react'
import { BalanceContext } from '../context/BlanceContext';


const RecentTransactions:React.FC = (e,) => {
    const { transactions, setTransactions } = useContext(BalanceContext)
  const handleClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("hi")
  }
  return (
    <>
          <div className='dash-panel'>
            <h2>
              Last Transactions
            </h2>
              {/* <h1>income</h1>
              {transactions.income.map((t,index) => {
                  return (
                      <div className="eexpense-container" key={index}>
                          <p>
                              {t.description}
                          </p>
                          <p>
                              {t.amount}
                          </p>
                    </div>
                  )
              })} */}
              {transactions.income.slice(0,2).map((t,index) => {
                const date = new Date(t.date)
                  return (
                      <div className="expense-container" key={index}>
                        <button onClick={()=> {
                              const newIncome = transactions.income.filter((trans)=>trans.id !== t.id )
                          setTransactions({...transactions,income:newIncome})
                        }}>x</button>
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
                                  {format(date, "yyy.M.dd | hh:mm aaaaa.'m'")}
                                  {/* {`${getDate(new Date(date))}.${getMonth(date)}.${getYear(date)} | ${getHours(date)}:${getMinutes(date)} ${get(date)}`} */}
                              </p>
                          </div>
                      </div>
                  )
              })}
              {transactions.outcome.map((t,index) => {
                const date = new Date(t.date)
                  return (
                      <div className="expense-container" key={index}>
                        <button onClick={()=> {
                              const newOutcome = transactions.outcome.filter((trans)=>trans.id !== t.id )
                          setTransactions({...transactions,outcome:newOutcome})

                        }}>x</button>
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
                                  {format(new Date(), "yyy.mm.dd | hh:mm aaaaa.'m'")}
                                  {/* {`${getDate(new Date(date))}.${getMonth(date)}.${getYear(date)} | ${getHours(date)}:${getMinutes(date)} ${get(date)}`} */}
                              </p>
                          </div>
                      </div>
                  )
              })}
          </div>
      </>

  )
}

export default RecentTransactions
