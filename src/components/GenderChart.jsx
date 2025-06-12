import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GenderChart() {
    const rawData = [3245, 3678, 350, 122]; // male, female, non-binary, not specified
    const total = rawData.reduce((sum, val) => sum + val, 0);
    const percentages = rawData.map(val => ((val / total) * 100).toFixed(1));

    const data = {
        labels: [
            `Male (${percentages[0]}%)`,
            `Female (${percentages[1]}%)`,
            `Non-binary (${percentages[2]}%)`,
            `Not specified (${percentages[3]}%)`
        ],
        datasets: [
            {
                data: rawData,
                backgroundColor: ['rgb(42, 215, 157)', 'rgb(150, 44, 226)', 'rgb(44, 90, 226)', '#9ca3af'],
                borderWidth: 0,
                cutout: '65%',
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white',
                    boxWidth: 12,
                    padding: 20,
                    usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const value = context.raw;
                        const percent = ((value / total) * 100).toFixed(1);
                        return `${context.label}: ${value} (${percent}%)`;
                    }
                }
            }
        },
    };

    return (
        <div className="bg-[#1f1f29] p-4 rounded-xl">
            <h2 className="mb-4 text-lg font-semibold">Gender Distribution</h2>
            <div className="w-full max-w-[300px] mx-auto">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
}
