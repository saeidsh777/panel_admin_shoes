import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import UsersTable from '@/Components/Modules/Tables/UsersTable/UsersTable';
import Link from 'next/link';
import EditablePhoto from '@/Components/Templates/AdminTemplate/AddUserTemplate/EditablePhoto/EditablePhoto';
export default function AddUserTemplate() {
    return (
        <main>
            <BreadCrumbPanel title="Add New User" />
            <div className="grid lg:grid-cols-5 gap-6 mt-24">
                <div className="box relative lg:col-span-2">
                    <div className="p-6">
                        <div className="absolute -top-12">
                            <EditablePhoto/>
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
                <div className="lg:col-span-3 box overflow-x-hidden">
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
