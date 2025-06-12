import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function AgeGroups() {
    const data = {
        labels: ['18', '28', '48', '64', '+80'],
        datasets: [
            { label: 'Male', data: [45, 43, 46, 12, 4], backgroundColor: 'rgb(42, 215, 157)' },
            { label: 'Female', data: [48, 49, 47, 14, 2], backgroundColor: 'rgb(150, 44, 226)' },
            { label: 'Other', data: [7, 8, 7, 12, 1], backgroundColor: 'rgb(44, 90, 226)' },
        ],
    };

    return (
        <div className="bg-[#1f1f29] p-4 rounded-xl">
            <h2 className="mb-4 text-lg font-semibold">Age Groups By Gender</h2>
            <Bar data={data} />
        </div>
    );
}
