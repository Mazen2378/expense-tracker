import React, {useState, useContext} from 'react'
import { motion } from 'framer-motion'
import { BalanceContext } from '../context/BlanceContext';
import { AddTransaction } from '../../utils/addTransaction';


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
                    AddTransaction(transactions, setTransactions, { description, amount: ev.toString(),category:'shopping'})
                    setDescription('')
                }}>
                <input onChange={(e) => { setDescription(e.target.value) }} name="" type="text" value={description} />
                <button type="submit">submit</button>
            </motion.form>
        </motion.div>
  )
}

export default Modal
