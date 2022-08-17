import React, { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';

interface BalancePropTypes {
    balance: number;
}

const Balance:React.FC<BalancePropTypes> = ({balance}) => {
    const countUpRef = useRef(null)
    const {update} = useCountUp({ref:countUpRef, duration:1,end:0,start:0})
    useEffect(() => {
        console.log('hi')
        update(balance)
    }, [balance]);

    return (
        <>
            <div className="balance">
                <h1>Your balance is:</h1>
                <h2 ref={countUpRef} className={balance < 0 ? 'negative':'positive'}>{balance}D.T</h2>
                <h2 className={balance < 0 ? 'negative':'positive'} >D.T</h2>
            </div>
        </>
    )
}



export default Balance
