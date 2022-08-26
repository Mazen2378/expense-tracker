import React, { useContext, useRef, useState} from 'react'
import { Line } from 'react-chartjs-2';
import { Chart, ChartData, registerables } from 'chart.js'
import { BalanceContext } from '../context/BlanceContext';
import Tooltip from './Tooltip';
import { getHours} from 'date-fns';
Chart.register(...registerables)

const BalanceChart:React.FC = () => {
  const newDate = new Date();
  const currentHour = getHours(newDate)
    const labels = [String(currentHour - 3), String(currentHour - 2), String(currentHour - 1), String(currentHour), String(currentHour + 1), String(currentHour + 2),String(currentHour + 3)]

    const {transactions} = useContext(BalanceContext)

    const data:ChartData<'line',number[],string> = {
        labels,
        datasets: [
            {

                borderWidth: 2,
                label: 'outcome',
                data: labels.map(label => {
                  let total = 0
                    transactions.outcome.forEach(transaction => {
                      if (String(getHours(transaction.date)) === label) {
                          total += transaction.amount;
                      }
                  })
                    return Math.abs(total)
                }
                ),
                tension: 0.4,
                borderColor: 'rgba(225, 16, 65,1)',
                backgroundColor:'rgba(225, 16, 65,1)',
                pointRadius: 0,
                pointBorderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'rgba(225, 16, 65,1)',
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverRadius: 4,
                pointHoverBorderColor: 'rgb(225,16,65)',
                pointHoverBorderWidth: 2,
            },
            {
                borderWidth: 2,
                label: 'income',
                data: labels.map(label => {
                    let total = 0
                    transactions.income.forEach(transaction => {
                        if (String(getHours(transaction.date)) === label) {
                            total += transaction.amount;
                        }
                    })
                    return Math.abs(total)
                    /* let total = 0;
* transactions.forEach(transaction => {
*     if (transaction.amount > 0 && labels[transaction.day] === label) {
*         total += transaction.amount;
*     }
* })
* return Math.abs(total) */

                }
                ),
                tension: 0.4,
                pointStyle:'circle',
                borderColor: 'greenyellow',
                backgroundColor: 'greenyellow',
                pointRadius: 0,
                pointBorderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'greenyellow',
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverRadius: 4,
                pointHoverBorderColor: 'greenyellow',
                pointHoverBorderWidth: 2,
            }
        ]
    }
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipData, setTooltipData] = useState(null);
    const [tooltipPos, setTooltipPos] = useState<any>(null);

    const chartRef = useRef<any>(null);

    const customTooltip = (context:any) => {
        if (context.tooltip.opacity == 0) {
            setTooltipVisible(false)
            return
        }
        const chart = chartRef.current;
        const canvas = chart.canvas
        if (canvas) {
            setTooltipVisible(true)
            const left = context.tooltip.x
            const top = context.tooltip.y

            if (tooltipPos?.top != top || tooltipPos?.left != left )  {
               setTooltipPos({top,left})
               setTooltipData(context.tooltip)
            }
        }
    };
    return (
        <>
            <div className=" relative chart">

            <Line ref={chartRef}  data={data} options={{
                interaction: {
                    mode: 'nearest',
                    intersect: false,

                },
                plugins: {
                 legend: {
                     display: false
                 },
                    tooltip: {
                        enabled: false,
                        position: 'nearest',
                        external: customTooltip
                    }
                },
                scales: {
                    x: {
                        grid:{
                            display: false,
                            color: 'rgba(255,255,255,0.1)',
                        }
                    },
                    y: {
                        min: -5,
                        grid:{
                            display:false,
                        }
                    }
                },
                }

            }/>
            {tooltipPos && (
                <Tooltip data={tooltipData} position={tooltipPos} visibility={tooltipVisible} />
            )}
            </div>

        </>
    )
};

export default BalanceChart;
