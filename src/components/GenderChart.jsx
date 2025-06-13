import { useState } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GenderChart() {
    const [chartType, setChartType] = useState('doughnut'); // "doughnut" or "pie"

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
                cutout: chartType === 'doughnut' ? '65%' : '0%',
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white',
                    boxWidth: 11,
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
        <div className="bg-[#242424] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Gender Distribution</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => setChartType('doughnut')}
                        className={`px-3 py-1 text-sm rounded-md font-medium ${chartType === 'doughnut'
                            ? 'bg-teal-400 text-black'
                            : 'bg-[#3a3a3a] text-white'
                            }`}
                    >
                        Donut
                    </button>
                    <button
                        onClick={() => setChartType('pie')}
                        className={`px-3 py-1 text-sm rounded-md font-medium ${chartType === 'pie'
                            ? 'bg-teal-400 text-black'
                            : 'bg-[#3a3a3a] text-white'
                            }`}
                    >
                        Pie
                    </button>
                </div>
            </div>

            <div className="w-full max-w-[30vw] mx-auto">
                {chartType === 'doughnut' ? (
                    <Doughnut data={data} options={options} />
                ) : (
                    <Pie data={data} options={options} />
                )}
            </div>
        </div>
    );
}
