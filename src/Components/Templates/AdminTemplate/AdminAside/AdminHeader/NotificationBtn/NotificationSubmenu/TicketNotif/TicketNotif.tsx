import Image from 'next/image';
import React from 'react';
import ShippingTime from '../ShippingTime/ShippingTime';
import Link from 'next/link';
export default function TicketNotif() {
    return (
        <div>
            <Link
                href={`/admin/tickets/ticketId`}
                className="flex gap-4 border-b border-gray-100 p-4 hover:bg-zinc-50"
            >
                <div className="w-12 h-12 overflow-hidden bg-zinc-200 rounded-2xl">
                    <Image
                        src={'/images/user/user-default-men.svg'}
                        width={500}
                        height={500}
                        alt="profile image"
                        className="size-full"
                    />
                </div>
                <div>
                    <p className="text-zinc-600 font-semibold leading-4">
                        saeid
                    </p>
                    <p className="text-zinc-500 line-clamp-1 max-w-52 mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sint, error?
                    </p>
                    <ShippingTime time="Sat Mar 29 2025 14:22:09 GMT+0330 (Iran Standard Time)" />
                </div>
            </Link>
        </div>
    );
}
