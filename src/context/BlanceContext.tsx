import React, { useState, createContext, useEffect } from 'react'
import { Transaction, placeholderTransactions, Transactions } from '../types';
interface balanceContextType {
    transactions: Transactions;
    setTransactions: (transactions: Transactions) => void;
    addTransaction: (input: { description: string; amount: string; category: string; }) => void;
    deleteTransaction: (transaction: Transaction, variant: 'income' | 'outcome') => void;

}
const initalData = {
    transactions: { income: [], outcome: [] },
    setTransactions: (transactions: Transactions) => {},
    addTransaction: (a: any) => {},
    deleteTransaction: (a: any) => {},
}
export const BalanceContext = createContext<balanceContextType>(initalData)

interface Props {
    children: JSX.Element
}
export const BalanceProvider: React.FC<Props> = ({ children }) => {
    const trans = localStorage.getItem("transactions");
    const [transactions, setTransactions] = useState<Transactions>(trans ? JSON.parse(trans) : placeholderTransactions);
    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }, [transactions])
    const addTransaction = (input: { description: string; amount: string; category: string; }) => {
        if (input.description.trim() === '') return

        const date = new Date()
        const variant = Number(input.amount) > 0 ? 'income' : 'outcome';
        const newTransaction = {
            description: input.description,
            amount: Number(input.amount),
            id: transactions[variant].length > 0 ? transactions[variant][0].id + 1 : 0,
            date,
            category: input.category
        }
        let newItem = transactions[variant]
        newItem.unshift(newTransaction)
        setTransactions({ ...transactions, [variant]: newItem })

    }
    const deleteTransaction = (transaction: Transaction, variant: 'outcome' | 'income') => {
        let newItem = transactions[variant].filter(t => t.id !== transaction.id)
        setTransactions({ ...transactions, [variant]: newItem })
    }
    return (
        <BalanceContext.Provider value={{ transactions, setTransactions, addTransaction, deleteTransaction }}>
            {children}
        </BalanceContext.Provider>
    )
}