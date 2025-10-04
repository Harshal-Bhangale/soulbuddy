import React from 'react';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar';
import DashboardContent from '../components/Dashboard/DashboardContent';

function Dashboard() {
    return (
        <div className="flex w-full min-h-[calc(100vh-80px)]">
            {/* Left Sidebar */}
            {/* <DashboardSidebar /> */}

            {/* Right Main Content */}
            <div className="flex-1 p-6 lg:p-10">
                <DashboardContent />
            </div>
        </div>
    );
}

export default Dashboard;
