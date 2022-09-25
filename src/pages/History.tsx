import React from 'react'
import { useSearchParams } from 'react-router-dom'
import BalanceChart from '../components/BalanceChart'
import { getDate } from 'date-fns'
import { motion } from 'framer-motion';
const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}
const History: React.FC = () => {
    const [params, setParams] = useSearchParams({ d: String(getDate(new Date())) })
    return (
        <motion.div
          className="container"
            transition={{
                duration: 0.4
            }}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <BalanceChart day={params.get('d') || '7'} />
            <h1>{params.get('d')}</h1>
        </motion.div>
    )
}
export default History
