import Actions from '@/Components/Templates/AdminTemplate/OverviewTemplate/RecentOrders/Actions/Actions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function UsersTable() {
    return (
        <table className="w-full whitespace-nowrap text-xs md:text-base">
            <thead className="sticky top-0 left-0 w-full bg-white outline-1 outline-zinc-200 z-10">
                <tr className="text-zinc-500 pb-4 text-left ">
                    <th>Profile</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Total Buy</th>
                    <th>Status</th>
                    <th>Jion On</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="text-zinc-400 ">
                <tr className="[&>td]:py-6 [&>td]:pe-6 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            className="flex items-center gap-2 font-semibold"
                            href={'/admin/users/profile/userId'}
                        >
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-200">
                                <Image
                                    className="size-full"
                                    src={'/images/products/p1.jpg'}
                                    width={500}
                                    height={500}
                                    alt="product image"
                                />
                            </div>
                            Saeid Shojaei
                        </Link>
                    </td>
                    <td>Saeid@gmail.com</td>
                    <td>09353054742</td>
                    <td>$650</td>
                    <td>Active</td>
                    <td>{new Date().toLocaleDateString()}</td>
                    <Actions id={'1'} />
                </tr>
            </tbody>
        </table>
    );
}
