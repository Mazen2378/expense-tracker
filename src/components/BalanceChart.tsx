import React , {useState} from 'react'
import { Line } from 'react-chartjs-2';
import { Chart, ChartData, registerables } from 'chart.js'
Chart.register(...registerables)

const labels = new Array(31).fill('hi')
const BalanceChart:React.FC = () => {

    const [state, setState] = useState(0);

    const data:ChartData<'line',number[],string> = {
        labels,
        datasets: [
            {
                borderWidth: 2,
                label: 'outcome',
                data: labels.map(label => Math.floor(Math.random() *15) ),
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
                data: labels.map(label => Math.floor(Math.random() *10) ),
                tension: 0.4,
                pointStyle:'circle',
                borderColor: 'rgba(225, 77, 65,1)',
                backgroundColor: 'rgba(225, 77, 65,1)',
                pointRadius: 0,
                pointBorderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'rgba(225, 77, 65,1)',
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverRadius: 4,
                pointHoverBorderColor: 'rgb(225,77,65)',
                pointHoverBorderWidth: 2,
            }
        ]
    }
    return (
        <>
            <Line data={data} options={{
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                events: ['click'],
                scales: {
                    x: {
                        grid:{
                            display: false,
                            color: 'rgba(255,255,255,0.1)',
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid:{
                            display:false,
                        }
                    }
                },
                }

            }/>
            <button onClick={()=>{setState(state+1)}}>click me</button>
        </>
    )
};

export default BalanceChart;
