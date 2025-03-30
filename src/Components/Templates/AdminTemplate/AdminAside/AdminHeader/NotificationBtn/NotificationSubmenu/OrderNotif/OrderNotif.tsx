import Link from 'next/link';
import React from 'react';
import { TbReceiptDollar } from 'react-icons/tb';
import ShippingTime from '../ShippingTime/ShippingTime';

export default function OrderNotif() {
    return (
        <div>
            <Link
                href={`/admin/orders/orderId`}
                className="flex gap-4 border-b border-gray-100 p-4 hover:bg-zinc-50"
            >
                <div className="w-12 h-12 overflow-hidden flex justify-center items-center bg-green-100 rounded-2xl">
                    <TbReceiptDollar className=" text-4xl text-green-500 " />
                </div>
                <div>
                    <p className="text-zinc-600 font-semibold leading-5 mb-1">
                        Galaxy A32
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                        <small className="text-zinc-500 line-clamp-1 max-w-52  bg-zinc-100 px-2 rounded-2xl">
                            count: 1
                        </small>
                        <small className="text-zinc-500 line-clamp-1 max-w-52  bg-zinc-100 px-2 rounded-2xl">
                            price: 365 $
                        </small>
                    </div>
                    <ShippingTime time="Sat Mar 29 2025 14:22:09 GMT+0330 (Iran Standard Time)" />
                </div>
            </Link>
        </div>
    );
}
