import React, { useEffect , useState } from 'react'
import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import { placeholderTransactions, Transactions } from './types';
import { BalanceContext } from './context/BlanceContext';

import Panel from './components/SideBar';
import Home from './pages/Home';

import './App.css'
import Add from './pages/Add';


const App:React.FC = ({}) => {
  const [balance, setBalance] = useState(0);
    const [add, setAdd] = useState(false);
  const [transactions, setTransactions] = useState<Transactions>(placeholderTransactions);
  useEffect(() => {
    let amount = 0;
    transactions.income.forEach(transaction => amount += transaction.amount)
    transactions.outcome.forEach(transaction => amount += transaction.amount)
    setBalance(amount)
    }
  ,[transactions]);
  const location = useLocation()
  return (
    <>
      <BalanceContext.Provider value={{transactions,setTransactions}}>
              <div className='bg-white'>

              </div>
        <AnimatePresence initial={false} exitBeforeEnter >
          <Routes key={location.pathname} location={location}>
            <Route path="/dashboard" element={<Home  balance={balance} setBalance={setBalance}/>}/>
            <Route path="/history" element={<p>hi</p>}/>
            <Route path="/add" element={<Add />}/>

          </Routes>
        </AnimatePresence>
       <AnimatePresence initial={false} exitBeforeEnter>
         {location.pathname === '/add' ? '' : <Panel key={String(location.pathname === '/add')} add={add} setAdd={setAdd} /> }

                  </AnimatePresence>
      </BalanceContext.Provider>
    </>
  )
};

export default App;
