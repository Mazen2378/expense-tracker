import { createContext } from 'react'
import { Transactions } from '../types';
interface balanceContextType {
    transactions:Transactions;
    setTransactions: (transactions:Transactions) => void;
}
const initalData = {
    transactions: {income:[],outcome:[]},
    setTransactions: (transactions:Transactions) => {}
}
export const BalanceContext = createContext<balanceContextType>(initalData)
