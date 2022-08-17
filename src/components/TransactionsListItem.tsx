import React, { useContext } from 'react';
import { BalanceContext } from '../context/BlanceContext';
import { Transaction } from '../types';

interface TransactionsListItemPropTypes {
    transaction:Transaction
}

const TransactionsListItem:React.FC<TransactionsListItemPropTypes> = ({transaction}) => {
    const variant = transaction.amount < 0 ? 'negative' : 'positive'
    const {setTransactions, transactions} = useContext(BalanceContext)
    const handleClick = () => {
        const filteredTransactions = transactions.filter((item)=>item.id !== transaction.id)
        setTransactions(filteredTransactions)
    }
    return (
        <>
            <div className={`item ${variant}`}>
                <div className={`marker`}></div>
                <div className="details">
                    <p>{transaction.description}</p>
                    <p>{transaction.amount}</p>
                </div>
                <div className="controls">
                    <p onClick={handleClick}>hi</p>
                </div>
            </div>
        </>
    )
};

export default TransactionsListItem;
