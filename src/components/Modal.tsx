import React, {useState, useContext} from 'react'
import { motion } from 'framer-motion'
import { BalanceContext } from '../context/BlanceContext';


const modalAnimation = {
    initial: {
        width: 0,
 height: 0,
    },
    animate: {
      width: '300px', height: '200px',
        transition: {
            duration: .8,
            when: 'beforeChildren',
            staggerChildren: 0.3
        }
    },
    exit: {
      width: 0, height: 0,
        transition: {
            duration: .8,
            when: 'afterChildren',
        }
    }
}
const childrenAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}
interface Props {
  ev: number;
}
const Modal:React.FC<Props> = ({ev}) => {
    const [description, setDescription] = useState<string>('')
    const { transactions, setTransactions } = useContext(BalanceContext)
    return (
        <motion.div
            variants={modalAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="form2">
            <motion.form
                variants={childrenAnimation}
                onSubmit={(e) => {
                    e.preventDefault()
                    if (description.trim() === '') return
                    const date = new Date()
                    const variant = ev > 0 ? transactions.income : transactions.outcome;
                    const newTransaction = {
                        description,
                        amount: ev,
                        id: variant.length > 0 ? variant[0].id + 1 : 0,
                        date,
                    }
                    if (ev > 0) {
                        localStorage.setItem("transactions", JSON.stringify({ outcome: transactions.outcome, income: [newTransaction, ...transactions.income] }))
                        setTransactions({ outcome: transactions.outcome, income: [newTransaction, ...transactions.income] })
                    } else {
                        localStorage.setItem("transactions", JSON.stringify({ income: transactions.income, outcome: [newTransaction, ...transactions.outcome] }))
                        setTransactions({ income: transactions.income, outcome: [newTransaction, ...transactions.outcome] })
                    }
                    setDescription('')
                }}>
                <input onChange={(e) => { setDescription(e.target.value) }} name="" type="text" value={description} />
                <button type="submit">submit</button>
            </motion.form>
        </motion.div>
  )
}

export default Modal
