import SearchInput from '@/Components/Modules/Inputs/SearchInput/SearchInput';
import Pagination from '@/Components/Modules/Pagination/Pagination';
import TopProductsTable from '@/Components/Modules/Tables/TopProductsTable/TopProductsTable';
import React from 'react';

export default function TopProductsSection() {
    return (
        <section className="box mt-8">
            <div className="p-4 border-b border-zinc-200">
                <h3 className="font-semibold text-xl text-zinc-600">
                    Top Products
                </h3>
            </div>
            <div className="p-6">
                <div className="mb-6">
                    <SearchInput />
                </div>
                <div className="overflow-x-scroll">
                    <TopProductsTable />
                </div>
                <div className="flex justify-center mt-6">
                    <Pagination />
                </div>
            </div>
        </section>
    );
}
