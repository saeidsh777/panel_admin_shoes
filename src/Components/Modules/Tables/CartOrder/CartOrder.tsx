import Link from 'next/link';
import React from 'react';
import { Status } from '../OrderTable/OrderTable';

export default function CartOrder() {
    return (
        <table className="w-full whitespace-nowrap text-xs md:text-base">
            <thead className="sticky top-0 left-0 w-full bg-white outline-1 outline-zinc-200">
                <tr className="text-zinc-400 pb-4 text-left [&>th]:pe-8 ">
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody className="text-zinc-500 ">
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/orders/ordersID/orderID'}
                            className="flex items-center gap-2"
                        >
                            12540
                        </Link>
                    </td>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>105</td>
                    <td>$650</td>
                    <td>
                        <Status type={1} />
                    </td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/orders/ordersID/orderID'}
                            className="flex items-center gap-2"
                        >
                            12540
                        </Link>
                    </td>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>105</td>
                    <td>$650</td>
                    <td>
                        <Status type={2} />
                    </td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/orders/ordersID/orderID'}
                            className="flex items-center gap-2"
                        >
                            12540
                        </Link>
                    </td>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>105</td>
                    <td>$650</td>
                    <td>
                        <Status type={3} />
                    </td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/orders/ordersID/orderID'}
                            className="flex items-center gap-2"
                        >
                            12540
                        </Link>
                    </td>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>105</td>
                    <td>$650</td>
                    <td>
                        <Status type={4} />
                    </td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/orders/ordersID/orderID'}
                            className="flex items-center gap-2"
                        >
                            12540
                        </Link>
                    </td>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>105</td>
                    <td>$650</td>
                    <td>
                        <Status type={4} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
