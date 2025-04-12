import React from 'react';
import ReportSection from './ReportSection/ReportSection';
import SalesReport from './SalesReport/SalesReport';
import RecentOrders from './RecentOrders/RecentOrders';
import TopProductsSection from './TopProductsSection/TopProductsSection';
import LastProductSection from './LastProductSection/LastProductSection';
import LastUsersSection from './LastUsersSection/LastUsersSection';

export default function OverviewTemplate() {
    return (
        <main>
            <ReportSection />
            <SalesReport />
            <RecentOrders />
            <div className="lg:grid grid-cols-5 gap-8 mb-8">
                <div className="col-span-2">
                    <TopProductsSection />
                </div>
                <div className="col-span-3">
                    <LastProductSection />
                </div>
            </div>
            <LastUsersSection/>
        </main>
    );
}
