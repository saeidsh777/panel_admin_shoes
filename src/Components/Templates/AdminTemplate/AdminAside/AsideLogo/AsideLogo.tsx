import { useAppSelector } from '@/redux/reduxHooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CloseAsideBtn from './CloseAsideBtn/CloseAsideBtn';

export default function AsideLogo() {
    const showMenu = useAppSelector((state) => state.adminMenu.aside);

    return (
        <div className='relative'>
            <Link
                href={'/admin'}
                className="h-[70px] w-[15rem] flex items-center border-b border-gray-200 ps-4 gap-2"
            >
                <div className="w-10 h-10 ">
                    <Image
                        src={'/images/logo.svg'}
                        width={500}
                        height={500}
                        alt="logo"
                        className="size-full object-contain"
                    />
                </div>
                <p
                    className={`font-black text-zinc-500 text-3xl transition-all ${
                        showMenu
                            ? 'opacity-100 visible'
                            : 'opacity-0 invisible group-hover:lg:opacity-100 group-hover:lg:visible'
                    }`}
                >
                    Shop
                </p>
            </Link>
            <CloseAsideBtn />
        </div>
    );
}
