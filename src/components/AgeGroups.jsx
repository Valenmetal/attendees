import { Bar } from 'react-chartjs-2';

export default function AgeGroups() {
    const data = {
        labels: ['18', '28', '48', '64', '+80'],
        datasets: [
            { label: 'Male', data: [45, 43, 46, 12, 4], backgroundColor: 'rgb(42, 215, 157)' },
            { label: 'Female', data: [48, 49, 47, 14, 2], backgroundColor: 'rgb(150, 44, 226)' },
            { label: 'Other', data: [7, 8, 7, 12, 1], backgroundColor: 'rgb(44, 90, 226)' },
        ],
    };
    const options = {
        scales: {
            x: {
                grid: { color: 'rgb(0, 0, 0,0)' },
            },
            y: {
                grid: { color: 'rgb(0, 0, 0,0)' },
            },
        },
    };
    return (
        <div className="bg-[#242424] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Age Groups By Gender</h2>
                <button className="p-1 px-2 rounded-full hover:bg-neutral-700">⋮</button>
            </div>
            <Bar data={data} options={options} />
        </div>
    );
}
