import { format, getDate, getHours, getISODay, getMinutes, getMonth, getTime, getYear } from 'date-fns';
import getDayOfYear from 'date-fns/fp/getDayOfYear/index';
import React, {useContext} from 'react'
import { BalanceContext } from '../context/BlanceContext';


const RecentTransactions:React.FC = () => {
    const { transactions } = useContext(BalanceContext)
  return (
    <>
          <div className='dash-panel'>
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
              <h1>outcome</h1>
              {transactions.outcome.map((t,index) => {
                const date = new Date(t.date)
                  return (
                      <div className="eexpense-container" key={index}>
                          <p>
                              {t.description}
                          </p>
                          <p>
                              {t.amount}
                          </p>
                          <p>
                              {format(new Date(), "yyy.mm.dd | hh:mm aaaaa.'m'")}
                              {/* {`${getDate(new Date(date))}.${getMonth(date)}.${getYear(date)} | ${getHours(date)}:${getMinutes(date)} ${get(date)}`} */}
                          </p>
                      </div>
                  )
              })}
          </div>
      </>

  )
}

export default RecentTransactions
