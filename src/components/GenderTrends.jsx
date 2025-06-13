import { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function GenderTrends() {
    const [selectedRange, setSelectedRange] = useState("Last 3 events");
    const [isOpen, setIsOpen] = useState(false);

    const ranges = ["Last 3 events", "Last 5 events", "Last 7 events"];

    const data = {
        labels: ["Winter", "Spring", "Summer"],
        datasets: [
            { label: "Male", data: [28, 32, 46], backgroundColor: "rgb(42, 215, 157)" },
            { label: "Female", data: [18, 29, 47], backgroundColor: "rgb(150, 44, 226)" },
            { label: "Other", data: [7, 8, 7], backgroundColor: "rgb(44, 90, 226)" },
            { label: "Not specified", data: [2, 3, 4], backgroundColor: "rgb(82, 82, 82)" },
        ],
    };

    const options = {
        scales: {
            x: { grid: { color: "rgb(0, 0, 0, 0)" } },
            y: { grid: { color: "rgb(0, 0, 0, 0)" } },
        },
    };

    return (
        <div className="bg-[#242424] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Gender Distribution Trends</h2>

                <div className="relative text-sm text-white">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-1 font-medium bg-[#414141] px-3 py-1.5 rounded-sm hover:bg-[#3a3a4a]"
                    >
                        {selectedRange}
                        <label className="h-4 w-4"> ▾ </label>
                    </button>

                    {isOpen && (
                        <ul className="absolute right-0 mt-2 w-40 bg-[#373737] rounded-md shadow-lg z-10">
                            {ranges.map((range) => (
                                <li
                                    key={range}
                                    onClick={() => {
                                        setSelectedRange(range);
                                        setIsOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-[#444444] cursor-pointer"
                                >
                                    {range}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <Bar data={data} options={options} />
        </div>
    );
}

