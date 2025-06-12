const Card = ({ title, value, diff, isUp }) => (
    <div className="bg-[#1f1f29] p-4 rounded-xl shadow text-center">
        <h4 className="text-sm text-gray-400">{title}</h4>
        <p className="text-3xl font-bold">{value}</p>
        <p className={`text-sm ${isUp ? "text-green-400" : "text-red-400"}`}>
            {diff} vs last event
        </p>
    </div>
);

export default function DashboardHeader() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card title="Total Attendees" value="7,245" diff="+15.3%" isUp />
            <Card title="Avg. Age" value="27.5" diff="-2.1" isUp={false} />
            <Card title="International Attendees" value="14%" diff="+3.2%" isUp />
        </div>
    );
}
