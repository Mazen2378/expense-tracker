import { createContext } from 'react'
import { Transaction } from '../types';
interface balanceContextType {
    transactions:Transaction[];
    setTransactions: (transactions:Transaction[]) => void;
}
const initalData = {
    transactions: [],
    setTransactions: (transactions:Transaction[]) => {}
}
export const BalanceContext = createContext<balanceContextType>(initalData)
