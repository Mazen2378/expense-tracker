import React, { useContext } from 'react'

import { BalanceContext } from '../context/BlanceContext';

import TransactionsList from '../components/TransactionsList';
import AnimatedPage from '../components/AnimatedPage';


const History:React.FC = () => {
    const {transactions} = useContext(BalanceContext)
    return (
        <AnimatedPage>
            <div className="container">
                <h1>All tranactions:</h1>
                <TransactionsList transactions={transactions} />
            </div>
        </AnimatedPage>
    )
}
export default History
