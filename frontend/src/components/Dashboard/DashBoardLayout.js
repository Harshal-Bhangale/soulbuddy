// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import DashboardHeader from './DashboardHeader';
// import DashboardSidebar from './DashboardSidebar';

// export default function DashboardLayout() {
//     return (
//         <div className="flex flex-col min-h-screen bg-slate-900 text-white">

//             {/* Header */}
//             <DashboardHeader />

//             {/* Main area */}
//             <div className="flex flex-1">

//                 {/* Sidebar: fixed height = viewport, no scroll */}
//                 <DashboardSidebar />

//                 {/* Content: takes remaining width, scrollable */}
//                 <main className="flex-1 h-screen overflow-auto p-4 bg-slate-800">
//                     <Outlet /> {/* DashboardContent, BirthChartPage, etc. */}
//                 </main>
//             </div>
//         </div>
//     );
// }



import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';

export default function DashboardLayout() {
    const HEADER_HEIGHT = 80; // adjust to your actual header height in px

    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-white">

            {/* --- Sticky Header --- */}
            <div style={{ height: HEADER_HEIGHT }} className="sticky top-0 z-20">
                <DashboardHeader />
            </div>

            {/* --- Main Area --- */}
            <div className="flex flex-1">

                {/* Sidebar: fixed height, non-scrollable */}
                <DashboardSidebar headerHeight={HEADER_HEIGHT} />

                {/* Content: scrollable only */}
                <main
                    className="flex-1 overflow-auto p-4 bg-slate-800"
                    style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
                >
                    <Outlet /> {/* DashboardContent, BirthChartPage, etc. */}
                </main>

            </div>
        </div>
    );
}
