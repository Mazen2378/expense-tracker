import React, { useEffect, useState, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router';


import { Transaction } from './types';
import { BalanceContext } from './context/BlanceContext';

import Panel from './components/SideBar';
import './App.css'
import BalanceChart from './components/BalanceChart';





const App:React.FC = ({}) => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    let amount = 0;
    transactions.forEach(transaction => amount += transaction.amount)
    setBalance(amount)
    }
  ,[transactions]);
  const location = useLocation()
  return (
    <>
      <BalanceContext.Provider value={{transactions,setTransactions}}>
          <Routes key={location.pathname} location={location}>
            <Route path="/home" element={<p>hi</p>}/>
            <Route path="/history" element={<p>hi</p>}/>
            <Route path="/chart" element={<BalanceChart/>}/>
          </Routes>
      </BalanceContext.Provider>
      <Panel />
    </>
  )
};

export default App;
