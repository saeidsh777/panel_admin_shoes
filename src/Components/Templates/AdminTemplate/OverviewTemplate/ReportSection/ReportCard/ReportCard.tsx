import React from 'react';
import { IoPersonAdd } from 'react-icons/io5';
import { FaUserClock } from 'react-icons/fa6';
import { BsBoxSeamFill } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';
export default function ReportCard({
    value,
    title,
    type,
}: {
    value: number;
    title: string;
    type: number;
}) {
    return (
        <div className="flex items-center justify-between p-5 box">
            <div>
                <p className="font-semibold text-zinc-600 md:text-xl">
                    {type === 4 && '$'} {value.toLocaleString()}
                </p>
                <p className="text-zinc-400">{title}</p>
            </div>
            <div className="w-12 h-12 flex justify-center items-center bg-blue-400 text-white text-xl md:text-3xl rounded-lg">
                {type === 1 && <IoPersonAdd />}
                {type === 2 && <FaUserClock />}
                {type === 3 && <BsBoxSeamFill />}
                {type === 4 && <FaDollarSign />}
            </div>
        </div>
    );
}
