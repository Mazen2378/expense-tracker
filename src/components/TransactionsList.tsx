import React, { useContext } from 'react';
import { BalanceContext } from '../context/BlanceContext';
import { Transaction } from '../types';
import TransactionsListItem from './TransactionsListItem';

interface TransactionsListPropTypes {
    transactions:Transaction[]
}

const TransactionsList:React.FC<TransactionsListPropTypes> = ({transactions}) => {
    return (
        <>
            <div className="transaction-list">
                {transactions.map((transaction,index) => {
                    return (
                        <TransactionsListItem  key={index} transaction={transaction}/>
                    )
                })}
            </div>
        </>
    )
};

export default TransactionsList;
