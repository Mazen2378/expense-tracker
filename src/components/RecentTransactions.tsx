import React, {useContext} from 'react'
import { BalanceContext } from '../context/BlanceContext';


const RecentTransactions:React.FC = () => {
    const { transactions } = useContext(BalanceContext)
  return (
    <>
          <div>
              <h1>income</h1>
              {transactions.income.map(t => {
                  return (
                    <div className='expense-container'>
                          <p>
                              {t.description}
                          </p>
                          <p>
                              {t.amount}
                          </p>
                    </div>
                  )
              })}
              <h1>outcome</h1>
              {transactions.outcome.map(t => {
                  return (
                      <div className="expense-container">
                          <p>
                              {t.description}
                          </p>
                          <p>
                              {t.amount}
                          </p>
                      </div>
                  )
              })}
          </div>
      </>

  )
}

export default RecentTransactions
