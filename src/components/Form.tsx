import React, { useContext, useState} from 'react';
import { BalanceContext } from '../context/BlanceContext';



const Form:React.FC = () => {
    const {transactions,setTransactions} = useContext(BalanceContext)
    const [input, setInput] = useState({description:'',amount:''});

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
        console.log('hello world')
    }
    const handleSubmit:React.FormEventHandler<HTMLFormElement> = e => {
      e.preventDefault()
      if (input.description.trim() === '' || input.amount.trim() === '' ) return
      const date = new Date()
      const variant = Number(input.amount) > 0 ? transactions.income: transactions.outcome;
      const newTransaction = {
        description: input.description,
        amount: Number(input.amount),
        id: variant.length > 0 ? variant[0].id + 1 : 0,
        date,
        }
        if (Number(input.amount) > 0) {
            setTransactions({ outcome: transactions.outcome, income: [newTransaction, ...transactions.income] })
        } else {
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
            <input autoComplete="off" onChange={handleChange} type="number" name="amount" value={input.amount} />
            <button type="submit">click me</button>
          </form>
        </div>
      </div>
    </>
  )
};

export default Form;
