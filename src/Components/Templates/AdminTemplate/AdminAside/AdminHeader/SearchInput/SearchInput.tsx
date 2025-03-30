import React from 'react';
import { CiSearch } from 'react-icons/ci';

export default function SearchInput() {
    return (
        <div className="flex items-center gap-4 px-4 py-2 rounded-2xl bg-zinc-100">
            <input
                type="search"
                className="outline-0 text-zinc-600 w-full lg:min-w-[20rem] block"
                placeholder="Search..."
            />
            <CiSearch className="text-lg text-zinc-600 cursor-pointer" />
        </div>
    );
}
