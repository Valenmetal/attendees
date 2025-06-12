import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS
} from 'chart.js';


export default function TicketTypeChart() {
    const data = {
        labels: ['General Access', 'VIP', 'Hotel Package', 'Add-ons'],
        datasets: [
            {
                label: 'Male',
                data: [1300, 500, 400, 200],
                backgroundColor: 'rgb(42, 215, 157)',
                stack: 'gender',
            },
            {
                label: 'Female',
                data: [1500, 600, 350, 200],
                backgroundColor: 'rgb(150, 44, 226)',
                stack: 'gender',
            },
            {
                label: 'Non-binary',
                data: [300, 100, 80, 90],
                backgroundColor: 'rgb(44, 90, 226)',
                stack: 'gender',
            },
            {
                label: 'Not specified',
                data: [100, 50, 20, 57],
                backgroundColor: '#9ca3af',
                stack: 'gender',
            },
        ],
    };

    const options = {
        borderRadius: 5,
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white',
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                ticks: { color: 'white' },
                grid: { color: 'rgb(0, 0, 0,0)' },
            },
            y: {
                stacked: true,
                ticks: { color: 'white' },
                grid: { color: 'rgb(0, 0, 0,0)' },
            },
        },
    };

    return (
        <div className="bg-[#1f1f29] p-4 rounded-xl">
            <h2 className="mb-4 text-lg font-semibold">Gender by Ticket Type</h2>
            <Bar data={data} options={options} />
        </div>
    );
}
