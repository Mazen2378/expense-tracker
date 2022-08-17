
import React, { useContext } from 'react'
import AnimatedPage from '../components/AnimatedPage';

import Balance from '../components/Balance';
import Form from '../components/Form';
import TransactionsList from '../components/TransactionsList';
import { BalanceContext } from '../context/BlanceContext';
interface HomeProps {
  balance: number;
  setBalance: (num:number) => void
}

const Home:React.FC<HomeProps> = ({balance}) => {
    const {transactions} = useContext(BalanceContext)
    const recentTransactions = transactions.filter((item,index)=> index < 5)
    return (
        <>
                <div className='container'>
                    <Balance balance={balance}/>
                </div>
        </>
    )
}
export default Home;
