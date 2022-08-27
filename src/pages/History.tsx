import React from 'react'
import {useSearchParams} from 'react-router-dom'
import BalanceChart from '../components/BalanceChart'
import {getDate} from 'date-fns'
const History:React.FC = () => {
    const [params, setParams] = useSearchParams({ d: String(getDate(new Date())) })
    return (
            <div className="container">
            <BalanceChart day={params.get('d') || '7'} />
            <h1>{params.get('d')}</h1>
            </div>
    )
}
export default History
