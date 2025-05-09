import Link from 'next/link';
import React from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
export const Status = ({ type }: { type: 1 | 2 | 3 | 4 }) => {
    const title = {
        1: 'DELAYED',
        2: 'COMPLETED',
        3: 'ON HOLD',
        4: 'CANCELLED',
    };
    const color = {
        1: 'bg-blue-400 text-white',
        2: 'bg-green-500 text-white',
        3: 'bg-yellow-400 text-zinc-600',
        4: 'bg-red-400 text-white',
    };
    return (
        <span className={`${color[type]} px-4 py-0.5 rounded-lg text-xs`}>
            {title[type]}
        </span>
    );
};

export default function OrderTable() {
    return (
        <table className="w-full whitespace-nowrap text-xs md:text-base">
            <thead>
                <tr className="text-zinc-400 pb-4 border-b border-zinc-200 text-left [&>th]:pe-8">
                    <th>Order ID</th>
                    <th>Customer Email</th>
                    <th>Units</th>
                    <th>Order Date</th>
                    <th>Order Cost</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="text-zinc-500 ">
                <tr className="[&>td]:py-6 [&>td]:pe-8">
                    <td className="font-semibold">2042</td>
                    <td>
                        <Link href={'/admin/profile?userId=dsjbdksdk'}>Saeid@gmaisdsdfdf.com</Link>
                    </td>
                    <td>1 Unit</td>
                    <td>Oct 20, 2018</td>
                    <td>$230</td>
                    <td>
                        <Status type={1} />
                    </td>
                    <td className="cursor-pointer">
                        <Link href={'/admin/order/orderID'}>
                            <MdRemoveRedEye />
                        </Link>
                    </td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8">
                    <td className="font-semibold">2042</td>
                    <td>
                        <Link href={'/'}>Saeid@gmail.com</Link>
                    </td>
                    <td>1 Unit</td>
                    <td>Oct 20, 2018</td>
                    <td>$230</td>
                    <td>
                        <Status type={2} />
                    </td>
                    <td className="cursor-pointer">
                        <Link href={'/'}>
                            <MdRemoveRedEye />
                        </Link>
                    </td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8">
                    <td className="font-semibold">2042</td>
                    <td>
                        <Link href={'/'}>Saeid@gmail.com</Link>
                    </td>
                    <td>1 Unit</td>
                    <td>Oct 20, 2018</td>
                    <td>$230</td>
                    <td>
                        <Status type={3} />
                    </td>
                    <td className="cursor-pointer">
                        <Link href={'/'}>
                            <MdRemoveRedEye />
                        </Link>
                    </td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8">
                    <td className="font-semibold">2042</td>
                    <td>
                        <Link href={'/'}>Saeid@gmail.com</Link>
                    </td>
                    <td>1 Unit</td>
                    <td>Oct 20, 2018</td>
                    <td>$230</td>
                    <td>
                        <Status type={4} />
                    </td>
                    <td className="cursor-pointer">
                        <Link href={'/'}>
                            <MdRemoveRedEye />
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
