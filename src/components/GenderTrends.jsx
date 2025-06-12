import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function GenderTrends() {
    const data = {
        labels: ['Winter', 'Spring', 'Summer'],
        datasets: [
            { label: 'Male', data: [28, 32, 46], backgroundColor: 'rgb(42, 215, 157)' },
            { label: 'Female', data: [18, 29, 47], backgroundColor: 'rgb(150, 44, 226)' },
            { label: 'Other', data: [7, 8, 7], backgroundColor: 'rgb(44, 90, 226)' },
        ],
    };

    return (
        <div className="bg-[#1f1f29] p-4 rounded-xl">
            <h2 className="mb-4 text-lg font-semibold">Gender Distribution Trends</h2>
            <Bar data={data} />
        </div>
    );
}
