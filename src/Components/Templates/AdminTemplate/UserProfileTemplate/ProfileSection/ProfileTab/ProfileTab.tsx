'use client';

import { Dispatch, SetStateAction } from 'react';

interface props {
    tab: number;
    setTab: Dispatch<SetStateAction<1 | 2>>;
}
export default function ProfileTab({ tab, setTab }: props) {
    return (
        <div className="px-6 border-b border-zinc-200">
            <ul className="flex items-center gap-12 font-semibold">
                <li
                    className={`py-6 border-b-2 cursor-pointer ${
                        tab === 1 ? 'border-blue-500' : 'border-transparent'
                    }`}
                    onClick={() => setTab(1)}
                >
                    Reports
                </li>
                <li
                    className={`py-6 border-b-2 cursor-pointer ${
                        tab === 2 ? 'border-blue-500' : 'border-transparent'
                    }`}
                    onClick={() => setTab(2)}
                >
                    Edit
                </li>
            </ul>
        </div>
    );
}
