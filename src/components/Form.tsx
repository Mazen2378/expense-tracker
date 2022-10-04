import React, { useContext, useState} from 'react';
import { BalanceContext } from '../context/BlanceContext';
import { Link } from 'react-router-dom';


const Form:React.FC = () => {
    const {transactions,setTransactions} = useContext(BalanceContext)
    const [input, setInput] = useState({description:'',amount:''});

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
        console.log('hello world')
    }
    const handleSubmit:React.FormEventHandler<HTMLFormElement> = e => {
    }

  return (
    <>
          <Link to='/calc'>calc</Link>
          <br />
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
