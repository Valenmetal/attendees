import DataTable from "react-data-table-component";

const columns = [
    { name: "Region", selector: row => row.region, sortable: true },
    { name: "Attendees", selector: row => row.attendees },
    { name: "Male", selector: row => row.male },
    { name: "Female", selector: row => row.female },
    { name: "Other", selector: row => row.other },
    { name: "Avg. Age", selector: row => row.avgAge },
];

const data = [
    { region: "North America", attendees: "4,328 (60%)", male: "1,947 (45%)", female: "2,077 (48%)", other: "304 (7%)", avgAge: "28.8" },
    { region: "Europe", attendees: "1,739 (24%)", male: "785 (44%)", female: "870 (50%)", other: "104 (6%)", avgAge: "29.2" },
    { region: "Asia", attendees: "652 (9%)", male: "328 (50%)", female: "263 (45%)", other: "33 (5%)", avgAge: "25.7" },
    { region: "South America", attendees: "362 (5%)", male: "181 (50%)", female: "163 (45%)", other: "18 (5%)", avgAge: "27.3" },
    { region: "Other", attendees: "184 (2%)", male: "74 (45%)", female: "79 (48%)", other: "11 (7%)", avgAge: "28.5" },
];

const customStyles = {
    table: {
        style: {
            backgroundColor: 'transparent',
        },
    },
    headRow: {
        style: {
            backgroundColor: 'transparent',
        },
    },
    rows: {
        style: {
            backgroundColor: 'transparent',

        },
    },
    headCells: {
        style: {
            color: 'white',
        },
    },
    cells: {
        style: {
            color: 'white', borderTop: '1px solid #2c2c36',
        },
    },
};

export default function RegionalDistribution() {
    return (
        <div className="bg-[#1f1f29] p-4 rounded-xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Regional Distribution of Attendees</h2>
                <button className="text-sm text-blue-400 hover:underline">Export Data</button>
            </div>
            <DataTable columns={columns} data={data} customStyles={customStyles} />
        </div>
    );
}
