import React from 'react';
import { useLocation, useNavigate } from 'react-router';


import Form from '../components/Form';

const date = new Date()
interface AddPropTypes {
}
const Add:React.FC<AddPropTypes> = () => {
  const location = useLocation()
  const navigation = useNavigate()

    return (
        <>
          <div className="add">
            <Form />
            <div className="calc">
            </div>
          </div>
        </>
    )
};

export default Add;
