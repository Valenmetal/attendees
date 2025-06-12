import React from 'react';
import DashboardHeader from './components/DashboardHeader.jsx';
import GenderChart from './components/GenderChart.jsx';
import TicketTypeChart from './components/TicketTypeChart.jsx';
import GenderTrends from './components/GenderTrends.jsx';
import AgeGroups from './components/AgeGroups.jsx';
import RegionalDistribution from './components/RegionalDistribution.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0e12] text-white p-6 space-y-6">
      <DashboardHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GenderChart />
        <TicketTypeChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GenderTrends />
        <AgeGroups />
      </div>
      <RegionalDistribution />
    </div>
  );
}
