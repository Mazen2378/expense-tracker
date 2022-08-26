import React, { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';

interface BalancePropTypes {
    balance: number;
}

const Balance:React.FC<BalancePropTypes> = ({balance}) => {
    const countUpRef = useRef(null)
    const {update} = useCountUp({ref:countUpRef, duration:1,end:0,start:0})
    useEffect(() => {
        update(balance)
    }, [balance]);

    return (
        <>
            <div className="balance">
                <p>Your total balance</p>
                <h1 ref={countUpRef} className={balance < 0 ? 'negative':'positive'}>{balance}D.T</h1>
                <h1 className={balance < 0 ? 'negative':'positive'} >D.T</h1>
            </div>
        </>
    )
}



export default Balance
