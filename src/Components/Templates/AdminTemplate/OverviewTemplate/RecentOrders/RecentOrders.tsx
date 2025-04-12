import OrderTable from '@/Components/Modules/Tables/OrderTable/OrderTable';
import Link from 'next/link';
import React from 'react';

export default function RecentOrders() {
    return (
        <section className="box mb-8">
            <div className="px-6 py-3 border-b border-zinc-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-zinc-500">
                    Recent Orders
                </h2>
                <Link
                    href={'/admin/orders/history'}
                    className="text-blue-400 hover:text-blue-500"
                >
                    View All
                </Link>
            </div>
            <div className="p-6">
                <div className="lg:px-6 overflow-x-scroll">
                    <OrderTable />
                </div>
            </div>
        </section>
    );
}
