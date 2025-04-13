import React from 'react';
import ProfileReportCard from './ProfileReportCard/ProfileReportCard';
import LatestOrders from './LatestOrders/LatestOrders';

export default function ProfileReport() {
    return (
        <div className="p-2 lg:p-6">
            <div className="grid lg:grid-cols-3 gap-4">
                <ProfileReportCard
                    title="Total Purchase"
                    number={325}
                    type={1}
                />
                <ProfileReportCard title="Bought" number={50} type={2} />
                <ProfileReportCard title="Wish List" number={50} type={3} />
            </div>
            <div className="box mt-8">
                <LatestOrders />
            </div>
        </div>
    );
}
