import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaGem, FaUser } from 'react-icons/fa6';
import { IoIosSettings } from 'react-icons/io';
import { TbLogout } from 'react-icons/tb';

export default function ProfileSubmenu() {
    return (
        <div className="absolute top-[60px]  -right-20 sm:right-0 bg-white shadow-md rounded-2xl min-w-72 overflow-hidden">
            <div className="flex items-center gap-4 border-b border-gray-100 p-4">
                <div className="w-12 h-12 overflow-hidden bg-zinc-200 rounded-full">
                    <Image
                        src={'/images/user/user-default-men.svg'}
                        width={500}
                        height={500}
                        alt="profile image"
                        className="size-full"
                    />
                </div>
                <div>
                    <p className="text-zinc-600">saeid sh</p>
                    <small className="text-zinc-500">email@email.com</small>
                </div>
            </div>
            <div className="border-b border-gray-100">
                <ul>
                    <li>
                        <Link
                            href={'/profile'}
                            className="flex items-center gap-4 text-sm text-zinc-500 p-4 hover:bg-zinc-100"
                        >
                            <FaUser />
                            <p>My Profile</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/profile'}
                            className="flex items-center gap-4 text-sm text-zinc-500 p-4 hover:bg-zinc-100"
                        >
                            <FaEnvelope />
                            <p>Message</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/profile'}
                            className="flex items-center gap-4 text-sm text-zinc-500 p-4 hover:bg-zinc-100"
                        >
                            <FaGem />
                            <p>Project</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/profile'}
                            className="flex items-center gap-4 text-sm text-zinc-500 p-4 hover:bg-zinc-100"
                        >
                            <IoIosSettings />
                            <p>Setting</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="">
                <Link
                    href={'/profile'}
                    className="flex items-center gap-4 text-sm text-zinc-500 p-4 hover:bg-zinc-100"
                >
                    <TbLogout />
                    <p>Logout</p>
                </Link>
            </div>
        </div>
    );
}
