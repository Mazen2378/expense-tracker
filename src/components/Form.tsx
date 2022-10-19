import React, { useContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BalanceContext } from '../context/BlanceContext';
import { IoCalculator } from 'react-icons/io5'
import { motion } from 'framer-motion'
import Modal from './Modal'


const Form: React.FC = () => {
    const { addTransaction } = useContext(BalanceContext)
    const [input, setInput] = useState({ description: '', amount: '', category: 'cafe' });
    const [open, setOpen] = useState<boolean>(false)
    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        console.log(input)
        addTransaction(input)
        setInput({ description: '', amount: '', category: 'cafe' })
    }

    return (
        <>
            <motion.div
                className="form">
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="description">description</label>
                        <input autoComplete="off" onChange={handleChange} type="text" name="description" value={input.description} />
                        <label htmlFor="amount">amount</label>
                        <div className="amount-container">
                            <input autoComplete="off" onChange={handleChange} type="number" name="amount" value={input.amount} />
                            {/* <Link className='icon' to='/calc'><IoCalculator /></Link> */}
                            <button type='button' className='icon' onClick={() => { setOpen(!open) }}><IoCalculator /></button>
                        </div>
                        <select onChange={handleChange} name='category' value={input.category}>
                            {['cafe', 'shopping'].map((option) => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                        <br />
                        <button type="submit">click me</button>

                    </form>
                </div>
            </motion.div>
            <AnimatePresence>
                {open && (
                    <Modal setOpen={setOpen} ev={7} />
                )}
            </AnimatePresence>
        </>
    )
};

export default Form;
