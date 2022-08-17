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

        const newTranasaction = {
           description: input.description,
            amount: Number(input.amount),
            id: transactions.length > 0 ? transactions[0].id + 1 : 0
        }
        setTransactions([newTranasaction,...transactions])

        setInput({description:'',amount:''})
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="description">description</label>
                <input autoComplete="off" onChange={handleChange} type="text" name="description" value={input.description} />
                <label htmlFor="amount">amount</label>
                <input autoComplete="off" onChange={handleChange} type="number" name="amount" value={input.amount} />
                <button type="submit">click me</button>
            </form>
        </>
    )
};

export default Form;
