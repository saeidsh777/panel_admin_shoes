'use client';
import { useEffect, useState } from 'react';
import SalesChart from './SalesChart/SalesChart';

interface datasState {
    Today: { name: string; uv: number; pv: number; amt: number }[];
    Monthly: { name: string; uv: number; pv: number; amt: number }[];
    Yearly: { name: string; uv: number; pv: number; amt: number }[];
}

export default function SalesReport() {
    const [datas, setDatas] = useState<datasState>({
        Today: [
            {
                name: '',
                uv: 0,
                pv: 0,
                amt: 0,
            },
        ],
        Monthly: [
            {
                name: '',
                uv: 0,
                pv: 0,
                amt: 0,
            },
        ],
        Yearly: [
            {
                name: '',
                uv: 0,
                pv: 0,
                amt: 0,
            },
        ],
    });
    const [data, setData] = useState([
        {
            name: '',
            uv: 0,
            pv: 0,
            amt: 0,
        },
    ]);
    const [tab, setTab] = useState(1);

    useEffect(() => {
        setDatas({
            Today: [
                {
                    name: 'Page A',
                    uv: 8000,
                    pv: 2400,
                    amt: 5000,
                },
                {
                    name: 'Page B',
                    uv: 3000,
                    pv: 30000,
                    amt: 2680,
                },
                {
                    name: 'Page C',
                    uv: 5500,
                    pv: 9800,
                    amt: 6200,
                },
                {
                    name: 'Page D',
                    uv: 5004,
                    pv: 1200,
                    amt: 2005,
                },
                {
                    name: 'Page E',
                    uv: 1001,
                    pv: 6001,
                    amt: 1100,
                },
                {
                    name: 'Page F',
                    uv: 2390,
                    pv: 7999,
                    amt: 8000,
                },
                {
                    name: 'Page G',
                    uv: 3490,
                    pv: 4300,
                    amt: 7800,
                },
            ],
            Monthly: [
                {
                    name: 'Page A',
                    uv: 4000,
                    pv: 2400,
                    amt: 5000,
                },
                {
                    name: 'Page B',
                    uv: 3000,
                    pv: 1398,
                    amt: 2680,
                },
                {
                    name: 'Page C',
                    uv: 2000,
                    pv: 9800,
                    amt: 5800,
                },
                {
                    name: 'Page D',
                    uv: 2780,
                    pv: 3908,
                    amt: 6800,
                },
                {
                    name: 'Page E',
                    uv: 1890,
                    pv: 4800,
                    amt: 1100,
                },
                {
                    name: 'Page F',
                    uv: 2390,
                    pv: 3800,
                    amt: 3150,
                },
                {
                    name: 'Page G',
                    uv: 3490,
                    pv: 4300,
                    amt: 7800,
                },
            ],
            Yearly: [
                {
                    name: 'Page A',
                    uv: 4000,
                    pv: 7110,
                    amt: 1055,
                },
                {
                    name: 'Page B',
                    uv: 1203,
                    pv: 1398,
                    amt: 8073,
                },
                {
                    name: 'Page C',
                    uv: 9001,
                    pv: 9800,
                    amt: 1005,
                },
                {
                    name: 'Page D',
                    uv: 2780,
                    pv: 7011,
                    amt: 6005,
                },
                {
                    name: 'Page E',
                    uv: 1890,
                    pv: 6555,
                    amt: 3012,
                },
                {
                    name: 'Page F',
                    uv: 8009,
                    pv: 3800,
                    amt: 7537,
                },
                {
                    name: 'Page G',
                    uv: 3490,
                    pv: 7777,
                    amt: 7800,
                },
            ],
        });
    }, []);

    useEffect(() => {
        setData(datas.Today);
    }, [datas]);
    return (
        <div className="box mb-8 text-xs md:text-base">
            <div className="px-6 py-3 border-b border-zinc-200">
                <h2 className="text-base md:text-lg font-semibold text-zinc-500">
                    Sales Report
                </h2>
            </div>

            <div className="lg:px-6 mb-4">
                <ul className="flex gap-10 border-b border-zinc-200 px-2 lg:px-6 font-semibold text-zinc-400">
                    <li
                        className={`${
                            tab === 1 ? 'border-blue-500' : 'border-transparent'
                        } transition-all py-6 cursor-pointer border-b-4 `}
                        onClick={() => {
                            setData(datas.Today);
                            setTab(1);
                        }}
                    >
                        Today&apos;s
                    </li>
                    <li
                        className={`${
                            tab === 2 ? 'border-blue-500' : 'border-transparent'
                        } transition-all py-6 cursor-pointer border-b-4 `}
                        onClick={() => {
                            setData(datas.Monthly);
                            setTab(2);
                        }}
                    >
                        Monthly
                    </li>
                    <li
                        className={`${
                            tab === 3 ? 'border-blue-500' : 'border-transparent'
                        } transition-all py-6 cursor-pointer border-b-4 `}
                        onClick={() => {
                            setData(datas.Yearly);
                            setTab(3);
                        }}
                    >
                        Yearly
                    </li>
                </ul>
            </div>

            <div className="w-full h-80">
                <SalesChart data={data} />
            </div>

            <div className="px-6 pb-6 flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8884d8] block"></span>
                    <p className="text-sm text-zinc-500">Via Referral</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffb5b5] block"></span>
                    <p className="text-sm text-zinc-500">Direct</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#bfb] block"></span>
                    <p className="text-sm text-zinc-500">Via Social</p>
                </div>
            </div>
        </div>
    );
}
