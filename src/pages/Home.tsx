
import { motion } from 'framer-motion';
import React from 'react'

import {getDate} from 'date-fns'
import Balance from '../components/Balance';
import BalanceChart from '../components/BalanceChart';
import BalanceDetails from '../components/BalanceDetails';
interface HomeProps {
  balance: number;
  setBalance: (num:number) => void
}


const animations = {
  initial:{opacity:0},
  animate: {opacity:1},
  exit: {opacity:0}
}
const Home:React.FC<HomeProps> = ({balance}) => {
    return (
        <>
                <motion.div
                  transition={{
                    duration:0.4
                  }}
                  variants={animations}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className='container'>
                    <Balance balance={balance}/>
                    <BalanceDetails />
                    <BalanceChart day={String(getDate(new Date()))} />
                </motion.div>
        </>
    )
}
export default Home;
