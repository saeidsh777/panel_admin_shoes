import SearchInput from '@/Components/Modules/Inputs/SearchInput/SearchInput';
import Pagination from '@/Components/Modules/Pagination/Pagination';
import ProductsTable from '@/Components/Modules/Tables/ProductsTable/ProductsTable';
import React from 'react';

export default function ProductsSection() {
    return (
        <section className="box mt-8">
            <div className="p-6">
                <div className="mb-6">
                    <SearchInput />
                </div>
                <div className="overflow-x-scroll">
                    <ProductsTable />
                </div>
                <div className="flex justify-center gap-4 text-xs text-zinc-400 my-6">
                    <p className="flex items-center">
                        Stock &gt; 10
                        <span className="w-3 h-3 rounded-xs bg-green-300 block text-white"></span>
                    </p>
                    <p className="flex items-center">
                        Stock &lt; 10
                        <span className="w-3 h-3 rounded-xs bg-yellow-300 block text-white"></span>
                    </p>
                    <p className="flex items-center">
                        Stock = 0
                        <span className="w-3 h-3 rounded-xs bg-red-300 block text-white"></span>
                    </p>
                </div>
                <div className="flex justify-center mt-6">
                    <Pagination />
                </div>
            </div>
        </section>
    );
}
