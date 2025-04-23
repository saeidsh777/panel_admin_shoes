import SearchInput from '@/Components/Modules/Inputs/SearchInput/SearchInput';
import Pagination from '@/Components/Modules/Pagination/Pagination';
import OrderTable from '@/Components/Modules/Tables/OrderTable/OrderTable';
import React from 'react';

export default function OrdersSection() {
    return (
        <section className="box mt-8">
            <div className="p-4 border-b border-zinc-200">
                <h3 className="font-semibold text-xl text-zinc-600">
                    All Orders
                </h3>
            </div>
            <div className="p-6">
                <div className="mb-6">
                    <SearchInput />
                </div>
                <div className="overflow-x-scroll">
                    <OrderTable />
                </div>

                <div className="flex justify-center mt-6">
                    <Pagination />
                </div>
            </div>
        </section>
    );
}
