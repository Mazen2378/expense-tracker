import React, { useContext } from 'react';
import { CgArrowDownO, CgArrowUpO } from 'react-icons/cg';
import { BalanceContext } from '../context/BlanceContext';

interface BalanceDetailsPropTypes {

}

const BalanceDetails: React.FC<BalanceDetailsPropTypes> = () => {

    const { transactions } = useContext(BalanceContext)
    const income = transactions.income.reduce((sum, current) => {
        return sum += current.amount
    }, 0)
    const outcome = transactions.outcome.reduce((sum, current) => {
        return sum += current.amount
    }, 0)
    return (
        <>
            <div className="balance-details">
                <div className="income">
                    <div className="circle">
                        <CgArrowUpO />

                    </div>
                    <div className="details">
                        <p>Total income</p>
                        <h3>{income} D.T </h3>

                    </div>
                </div>
                <div className="outcome">
                    <div className="circle">
                        <CgArrowDownO />
                    </div>
                    <div className="details">
                        <p>Total expenses</p>
                        <h3>{outcome} D.T </h3>
                    </div>
                </div>
            </div>
        </>
    )
};

export default BalanceDetails;
