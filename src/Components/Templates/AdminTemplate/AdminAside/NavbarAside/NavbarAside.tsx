'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MdSpaceDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillProduct } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';
import { PiTagSimpleFill } from 'react-icons/pi';
import { useAppSelector } from '@/redux/reduxHooks';

export default function NavbarAside() {
    const path = usePathname();
    const [itemActive, setItemActive] = useState<string>('');
    const showMenu = useAppSelector((state) => state.adminMenu.aside);

    useEffect(() => {
        if (path) {
            const regex: RegExp = /(?<=\/admin\/)\w+/;
            const match = path.match(regex);
            if (match) {
                setItemActive(match.toString());
            } else {
                setItemActive('');
            }
        }
    }, []);

    return (
        <nav>
            <ul>
                {/* Owerview */}
                <li className="text-sm text-zinc-400 nav min-w-[15rem]">
                    <Link
                        href={'/admin'}
                        className={`flex gap-2 items-center p-4 relative ${
                            path === '/admin' && 'link_active text-zinc-600'
                        }`}
                    >
                        <MdSpaceDashboard
                            className={`size-9 ${
                                path === '/admin' && 'text-blue-400'
                            }`}
                        />
                        <span
                            className={`transition-all ${
                                showMenu
                                    ? 'opacity-100 visible'
                                    : 'opacity-0 invisible group-hover:lg:opacity-100 group-hover:lg:visible'
                            }`}
                        >
                            OVERVIEW
                        </span>
                    </Link>
                </li>

                {/* Users */}
                <li className="text-sm text-zinc-400 nav min-w-[15rem]">
                    <div
                        className={`flex gap-2 items-center p-4 relative cursor-pointer ${
                            path.startsWith('/admin/users') &&
                            'link_active text-zinc-600'
                        }`}
                        onClick={() =>
                            setItemActive((prv) =>
                                prv === 'users' ? '' : 'users'
                            )
                        }
                    >
                        <FaUsers
                            className={`size-9 ${
                                path.startsWith('/admin/users') &&
                                'text-blue-400'
                            }`}
                        />
                        <span
                            className={`transition-all ${
                                showMenu
                                    ? 'opacity-100 visible'
                                    : 'opacity-0 invisible group-hover:lg:opacity-100 group-hover:lg:visible'
                            }`}
                        >
                            USERS
                            <IoIosArrowForward
                                className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all ${
                                    itemActive === 'users'
                                        ? 'rotate-90'
                                        : 'rotate-0'
                                }`}
                            />
                        </span>
                    </div>
                    <div
                        className={`bg-zinc-50 transition-all h-fit overflow-hidden duration-1000 ${
                            itemActive === 'users' ? 'max-h-60' : 'max-h-0'
                        } ${
                            !showMenu &&
                            itemActive === 'users' &&
                            'opacity-0 invisible lg:max-h-0 group-hover:lg:max-h-60 group-hover:lg:opacity-100 group-hover:lg:visible'
                        }`}
                    >
                        <ul>
                            <li>
                                <Link
                                    className={`ps-16 py-4 block hover:text-zinc-600 transition-colors ${
                                        path === '/admin/users' &&
                                        'text-zinc-600 bg-gray-100'
                                    }`}
                                    href={'/admin/users'}
                                >
                                    All Users
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`ps-16 py-4 block hover:text-zinc-600 transition-colors ${
                                        path === '/admin/users/add-user' &&
                                        'text-zinc-600 bg-gray-100'
                                    }`}
                                    href={'/admin/users/add-user'}
                                >
                                    Add User
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`ps-16 py-4 block hover:text-zinc-600 transition-colors ${
                                        path === '/admin/users/ban' &&
                                        'text-zinc-600 bg-gray-100'
                                    }`}
                                    href={'/admin/users/ban'}
                                >
                                    Ban
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>

                {/* Products */}
                <li className="text-sm text-zinc-400 nav min-w-[15rem]">
                    <div
                        className={`flex gap-2 items-center p-4 relative cursor-pointer ${
                            path.startsWith('/admin/products') &&
                            'link_active text-zinc-600'
                        }`}
                        onClick={() =>
                            setItemActive((prv) =>
                                prv === 'products' ? '' : 'products'
                            )
                        }
                    >
                        <AiFillProduct
                            className={`size-9 ${
                                path.startsWith('/admin/products') &&
                                'text-blue-400'
                            }`}
                        />
                        <span
                            className={`transition-all ${
                                showMenu
                                    ? 'opacity-100 visible'
                                    : 'opacity-0 invisible group-hover:lg:opacity-100 group-hover:lg:visible'
                            }`}
                        >
                            PRODUCTS
                            <IoIosArrowForward
                                className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all ${
                                    itemActive === 'products'
                                        ? 'rotate-90'
                                        : 'rotate-0'
                                }`}
                            />
                        </span>
                    </div>
                    <div
                        className={`bg-zinc-50 transition-all h-fit overflow-hidden duration-1000 ${
                            itemActive === 'products' ? 'max-h-60' : 'max-h-0'
                        } ${
                            !showMenu &&
                            itemActive === 'products' &&
                            'opacity-0 invisible lg:max-h-0 group-hover:lg:max-h-60 group-hover:lg:opacity-100 group-hover:lg:visible'
                        }`}
                    >
                        <ul>
                            <li>
                                <Link
                                    className={`ps-16 py-4 block hover:text-zinc-600 transition-colors ${
                                        path === '/admin/products' &&
                                        'text-zinc-600 bg-gray-100'
                                    }`}
                                    href={'/admin/products'}
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`ps-16 py-4 block hover:text-zinc-600 transition-colors ${
                                        path ===
                                            '/admin/products/add-product' &&
                                        'text-zinc-600 bg-gray-100'
                                    }`}
                                    href={'/admin/products/add-product'}
                                >
                                    Add Product
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>

                {/* Orders */}
                <li className="text-sm text-zinc-400 nav min-w-[15rem]">
                    <div
                        className={`flex gap-2 items-center p-4 relative cursor-pointer ${
                            path.startsWith('/admin/orders') &&
                            'link_active text-zinc-600'
                        }`}
                        onClick={() =>
                            setItemActive((prv) =>
                                prv === 'orders' ? '' : 'orders'
                            )
                        }
                    >
                        <FaCartShopping
                            className={`size-9 ${
                                path.startsWith('/admin/orders') &&
                                'text-blue-400'
                            }`}
                        />
                        <span
                            className={`transition-all ${
                                showMenu
                                    ? 'opacity-100 visible'
                                    : 'opacity-0 invisible group-hover:lg:opacity-100 group-hover:lg:visible'
                            }`}
                        >
                            ORDERS
                            <IoIosArrowForward
                                className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all ${
                                    itemActive === 'orders'
                                        ? 'rotate-90'
                                        : 'rotate-0'
                                }`}
                            />
                        </span>
                    </div>
                    <div
                        className={`bg-zinc-50 transition-all h-fit overflow-hidden duration-1000 ${
                            itemActive === 'orders' ? 'max-h-60' : 'max-h-0'
                        } ${
                            !showMenu &&
                            itemActive === 'orders' &&
                            'opacity-0 invisible lg:max-h-0 group-hover:lg:max-h-60 group-hover:lg:opacity-100 group-hover:lg:visible'
                        }`}
                    >
                        <ul>
                            <li>
                                <Link
                                    className={`ps-16 py-4 block hover:text-zinc-600 transition-colors ${
                                        path === '/admin/orders' &&
                                        'text-zinc-600 bg-gray-100'
                                    }`}
                                    href={'/admin/orders'}
                                >
                                    New Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`ps-16 py-4 block hover:text-zinc-600 transition-colors ${
                                        path === '/admin/orders/history' &&
                                        'text-zinc-600 bg-gray-100'
                                    }`}
                                    href={'/admin/orders/history'}
                                >
                                    Order History
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>

                {/* Brands */}
                <li className="text-sm text-zinc-400 nav min-w-[15rem]">
                    <div
                        className={`flex gap-2 items-center p-4 relative cursor-pointer ${
                            path.startsWith('/admin/brands') &&
                            'link_active text-zinc-600'
                        }`}
                        onClick={() =>
                            setItemActive((prv) =>
                                prv === 'brands' ? '' : 'brands'
                            )
                        }
                    >
                        <PiTagSimpleFill
                            className={`size-9 ${
                                path.startsWith('/admin/brands') &&
                                'text-blue-400'
                            }`}
                        />
                        <span
                            className={`transition-all ${
                                showMenu
                                    ? 'opacity-100 visible'
                                    : 'opacity-0 invisible group-hover:lg:opacity-100 group-hover:lg:visible'
                            }`}
                        >
                            BRANDS
                            <IoIosArrowForward
                                className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all ${
                                    itemActive === 'brands'
                                        ? 'rotate-90'
                                        : 'rotate-0'
                                }`}
                            />
                        </span>
                    </div>
                    <div
                        className={`bg-zinc-50 transition-all h-fit overflow-hidden duration-1000 ${
                            itemActive === 'brands' ? 'max-h-60' : 'max-h-0'
                        } ${
                            !showMenu &&
                            itemActive === 'brands' &&
                            'opacity-0 invisible lg:max-h-0 group-hover:lg:max-h-60 group-hover:lg:opacity-100 group-hover:lg:visible'
                        }`}
                    >
                        <ul>
                            <li>
                                <Link
                                    className={`ps-16 py-4 block hover:text-zinc-600 transition-colors ${
                                        path === '/admin/brands' &&
                                        'text-zinc-600 bg-gray-100'
                                    }`}
                                    href={'/admin/brands'}
                                >
                                    Brands
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`ps-16 py-4 block hover:text-zinc-600 transition-colors ${
                                        path === '/admin/brands/add-brand' &&
                                        'text-zinc-600 bg-gray-100'
                                    }`}
                                    href={'/admin/brands/add-brand'}
                                >
                                    Add Brand
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
