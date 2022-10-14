import React, { useContext} from 'react'
import { BalanceContext } from '../context/BlanceContext';
import TransactionItem from './Transaction';

const RecentTransactions: React.FC = (e,) => {
    const { transactions } = useContext(BalanceContext)
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
                    {transactions.income.length ? (
                            transactions.income.slice(0, 4).map((t, index) => {
                                return (
                                    <TransactionItem variant='income' t={t} key={index} />
                                )
                            })
                    ) : (
                            <p className='additional-info'>
                                you have no incomes
                            </p>
                    )}
                    <p>
                        outcome
                    </p>
                    {transactions.outcome.length ? (
                        transactions.outcome.slice(0, 4).map((t, index) => {
                            return (
                                <TransactionItem variant='outcome' t={t} key={index} />
                            )
                        })
                    ) : (
                            <p className='additional-info'>
                            you have no expenses
                        </p>
                    )}
                </div>
            </div>
        </>

    )
}

export default RecentTransactions
