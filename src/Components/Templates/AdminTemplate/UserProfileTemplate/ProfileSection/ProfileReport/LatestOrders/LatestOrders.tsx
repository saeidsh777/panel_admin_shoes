import CartOrder from '@/Components/Modules/Tables/CartOrder/CartOrder';
import Link from 'next/link';
import React from 'react';

export default function LatestOrders() {
    return (
        <div>
            <div className="px-4 py-6 border-b border-zinc-200 flex justify-between items-center">
                <h3 className="font-semibold text-lg">Orders</h3>
                <Link className="text-blue-400" href={'/admin/orders/ordersID'}>
                    View All
                </Link>
            </div>

            <div className="p-6">
                <div className="h-80 overflow-scroll">
                    <CartOrder />
                </div>
            </div>
        </div>
    );
}
