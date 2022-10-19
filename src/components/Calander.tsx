import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getDate } from 'date-fns'

const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
const months = ['jan','feb','mar','avr','may','jun','jul','aug','sep','oct','nov','dec']
const Calander: React.FC = () => {
  const [searchParams,setSearchParams ] = useSearchParams({d:String(getDate(new Date()))})
    const [month, setMonth] = useState(8)
    return (
        <>
            <div className='switcher'>
                <button onClick={() => setMonth(Math.max(month - 1, 0))}>{'<'}</button>
                <p className="inline">{months[month]}</p>
                <button onClick={() => setMonth(Math.min(month + 1, 11))}>{'>'}</button>
            </div>
            <div className="grid">
                {
                  days.map(day => {
                    if (((month % 2 === 1 && month !== 7 && month !== 9 && month !== 11) || month === 8 || month === 10 ) && day === 31) return;
                    if ((month === 1 && day > 28 ) ) return (<div></div>);
                    return (
                        <div onClick={() => setSearchParams({ d: String(day) })} className={day === Number(searchParams.get('d')) ? 'active' : ''}>
                            {day}
                        </div>
                  ) 
                })}
            </div>
        </>
    )
}
export default Calander
