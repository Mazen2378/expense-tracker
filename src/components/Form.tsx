import React, { useContext, useState} from 'react';
import { BalanceContext } from '../context/BlanceContext';
import {IoCalculator} from 'react-icons/io5'
import { Link } from 'react-router-dom';


const Form:React.FC = () => {
    const {transactions,setTransactions} = useContext(BalanceContext)
    const [input, setInput] = useState({description:'',amount:''});

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
        console.log('hello world')
    }
    const handleSubmit:React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        if (input.description.trim() === '') return
        const date = new Date()
        const variant = Number(input.amount) > 0 ? transactions.income : transactions.outcome;
        const newTransaction = {
            description: input.description,
            amount: Number(input.amount),
            id: variant.length > 0 ? variant[0].id + 1 : 0,
            date,
        }
        if (newTransaction.amount > 0) {
            localStorage.setItem("transactions", JSON.stringify({ outcome: transactions.outcome, income: [newTransaction, ...transactions.income] }))
            setTransactions({ outcome: transactions.outcome, income: [newTransaction, ...transactions.income] })
        } else {
            localStorage.setItem("transactions", JSON.stringify({ income: transactions.income, outcome: [newTransaction, ...transactions.outcome] }))
            setTransactions({ income: transactions.income, outcome: [newTransaction, ...transactions.outcome] })
        }
        setInput({ description: '', amount: '' })
    }

  return (
    <>
      <div className="form">
        <div>
          <form  onSubmit={handleSubmit}>
            <label htmlFor="description">description</label>
            <input autoComplete="off" onChange={handleChange} type="text" name="description" value={input.description} />
                      <label htmlFor="amount">amount</label>
                      <div className="amount-container">
                          <input autoComplete="off" onChange={handleChange} type="number" name="amount" value={input.amount} />
                          <Link className='icon' to='/calc'><IoCalculator/></Link>
                      </div>

            <button type="submit">click me</button>
          </form>
        </div>
      </div>
    </>
  )
};

export default Form;
