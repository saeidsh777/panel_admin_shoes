import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import Image from 'next/image';
import { TbPhotoEdit } from 'react-icons/tb';
import { IoIosClose } from 'react-icons/io';
import UsersTable from '@/Components/Modules/Tables/UsersTable/UsersTable';
import Link from 'next/link';
export default function AddUserTemplate() {
    return (
        <main>
            <BreadCrumbPanel title="Add New User" />
            <div className="grid grid-cols-5 gap-6 mt-24">
                <div className="box relative col-span-2">
                    <div className="p-6">
                        <div className="absolute w-24 group -top-12">
                            <div className="w-24 h-24 overflow-hidden rounded-2xl bg-zinc-200 relative z-1">
                                <Image
                                    className="size-full"
                                    src={'/images/user/user-default-men.svg'}
                                    width={500}
                                    height={500}
                                    alt="profile image"
                                />
                            </div>
                            <label
                                className="absolute bottom-0 right-0 z-1"
                                htmlFor="file"
                            >
                                <span className="p-1 bg-blue-400 text-white w-6 h-6 cursor-pointer hover:bg-blue-500 flex justify-center items-center rounded-2xl">
                                    <TbPhotoEdit />
                                </span>
                                <input id="file" type="file" hidden />
                            </label>
                            <span className="absolute bottom-0 left-0 p-1 bg-red-300 text-red-800 w-6 h-6 cursor-pointer hover:bg-red-500 hover:text-white flex justify-center items-center rounded-2xl z-1">
                                <IoIosClose />
                            </span>

                            <select
                                className="bg-blue-200 text-sm pt-4 pb-1 px-2 absolute w-full border border-zinc-200 rounded-xl -translate-y-8 z-0 transition-all group-hover:-translate-y-4 group-hover:bg-zinc-50"
                                name=""
                                id=""
                            >
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                            </select>
                        </div>
                        <div className="pt-16">
                            <form
                                className="text-zinc-600 flex flex-col gap-4"
                                action=""
                            >
                                <div>
                                    <label
                                        className="mb-2 inline-block"
                                        htmlFor=""
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border border-zinc-200 rounded-xl py-2 px-4 w-full bg-zinc-50 outline-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="mb-2 inline-block"
                                        htmlFor=""
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="Email"
                                        className="border border-zinc-200 rounded-xl py-2 px-4 w-full bg-zinc-50 outline-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="mb-2 inline-block"
                                        htmlFor=""
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className="border border-zinc-200 rounded-xl py-2 px-4 w-full bg-zinc-50 outline-none"
                                    />
                                </div>
                                <div className="place-content-end">
                                    <button
                                        type="submit"
                                        className="btn_global"
                                    >
                                        Add User
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 box">
                    <div className="p-6">
                        <div className="pb-6 flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-zinc-500">
                                Latest Users
                            </h2>
                            <Link
                                href={'/admin/users'}
                                className="text-blue-400 hover:text-blue-500"
                            >
                                View All
                            </Link>
                        </div>
                        <div className="overflow-x-scroll">
                            <UsersTable />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
