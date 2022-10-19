
import { format } from 'date-fns';
import React, { useContext } from 'react'
import { Transaction } from '../types';
import { BalanceContext } from '../context/BlanceContext';
import { MdOutlineLocalCafe, MdOutlineLocalGroceryStore } from 'react-icons/md'
const TransactionItem: React.FC<{variant:'outcome' | 'income'; t: Transaction }> = ({variant, t }) => {
    const { deleteTransaction, transactions, setTransactions } = useContext(BalanceContext)
  const handleClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault()
    deleteTransaction(t,variant)
  }
    return (
        <div className="expense-container">
            <button onClick={handleClick}>{t.category  === 'cafe' ? (
                <MdOutlineLocalCafe className='hi' />
            ) : (
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
                <p className={variant === 'outcome' ? 'negative' : 'positive' }>
                    {
                        t.amount % 1 === 0 ? `${t.amount}.00` : t.amount
                    }
                </p>
                <p className="e-date">
                    {format(new Date(t.date), "yyy.M.dd | hh:mm aaaaa.'m'")}
                </p>
            </div>
        </div>
    )
}
export default TransactionItem
