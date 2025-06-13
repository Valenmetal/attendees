import { FaUser, FaUserFriends, FaGlobe } from 'react-icons/fa';

const Card = ({ title, value, diff, isUp, icon: Icon, iconColor }) => (
    <div className="bg-[#242424] p-4 rounded-xl shadow text-left">
        <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium text-gray-400">{title}</h4>
            <Icon className={`text-xl ${iconColor}`} />
        </div>
        <p className="text-3xl font-bold">{value}</p>
        <p className={`text-sm ${isUp ? "text-green-400" : "text-red-400"}`}>
            {diff} vs last event
        </p>
    </div>
);

export default function DashboardHeader() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card
                title="Total Attendees"
                value="7,245"
                diff="↑15.3%"
                isUp
                icon={FaUserFriends}
                iconColor="text-teal-400"
            />
            <Card
                title="Avg. Age"
                value="27.5"
                diff="↓2.1"
                isUp={false}
                icon={FaUser}
                iconColor="text-purple-400"
            />
            <Card
                title="International Attendees"
                value="14%"
                diff="↑3.2%"
                isUp
                icon={FaGlobe}
                iconColor="text-blue-400"
            />
        </div>
    );
}

