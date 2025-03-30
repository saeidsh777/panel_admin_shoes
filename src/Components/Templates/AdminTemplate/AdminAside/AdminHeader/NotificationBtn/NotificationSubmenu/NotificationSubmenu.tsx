import React, { useState } from 'react';
import TicketNotif from './TicketNotif/TicketNotif';
import OrderNotif from './OrderNotif/OrderNotif';

export default function NotificationSubmenu() {
    const [tab, setTab] = useState('a');
    return (
        <div className="absolute top-[51px] -right-4 sm:right-0 bg-white shadow-md rounded-2xl w-72 sm:w-80 overflow-hidden">
            <div className="border-b border-gray-100 p-4">
                <p className="text-zinc-500 text-xl font-semibold">
                    Notifications
                </p>
            </div>
            <div className="border-b border-gray-100">
                <ul className="flex items-center justify-between text-md text-zinc-400 font-semibold">
                    <li
                        className={`p-4 whitespace-nowrap border-b-2 transition-all ${
                            tab === 'a'
                                ? 'border-blue-400 '
                                : 'border-transparent'
                        }`}
                        onClick={() => setTab('a')}
                    >
                        All (0)
                    </li>
                    <li
                        className={`p-4 whitespace-nowrap border-b-2 transition-all ${
                            tab === 'm'
                                ? 'border-blue-400 '
                                : 'border-transparent'
                        }`}
                        onClick={() => setTab('m')}
                    >
                        Tickets (0)
                    </li>
                    <li
                        className={`p-4 whitespace-nowrap border-b-2 transition-all ${
                            tab === 'o'
                                ? 'border-blue-400 '
                                : 'border-transparent'
                        }`}
                        onClick={() => setTab('o')}
                    >
                        Other (0)
                    </li>
                </ul>
            </div>
            <div className="max-h-96 overflow-y-scroll">
                <TicketNotif />
                {/* <TicketNotif />
                <TicketNotif />
                <TicketNotif /> */}
                <OrderNotif />

            </div>
        </div>
    );
}
