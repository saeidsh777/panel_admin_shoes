import React from 'react';
import { FaSackDollar } from 'react-icons/fa6';
import { FaCartArrowDown } from 'react-icons/fa6';
import { TbJewishStarFilled } from 'react-icons/tb';

interface props {
    title: string;
    number: number;
    type: 1 | 2 | 3;
}
export default function ProfileReportCard({ title, number, type }: props) {
    return (
        <div className="box p-4">
            <div className="flex items-center gap-4">
                <div
                    className={`w-16 h-16 text-white rounded-xl flex justify-center items-center text-3xl ${
                        type === 1 && 'bg-blue-400'
                    } ${type === 2 && 'bg-amber-500'} ${
                        type === 3 && 'bg-green-600'
                    }`}
                >
                    {type === 1 && <FaSackDollar />}
                    {type === 2 && <FaCartArrowDown />}
                    {type === 3 && <TbJewishStarFilled />}
                </div>
                <div>
                    <p className="font-semibold text-2xl">
                        {type === 1 && '$'} {number}
                    </p>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}
