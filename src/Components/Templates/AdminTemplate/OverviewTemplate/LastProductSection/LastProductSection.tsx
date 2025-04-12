import ProductsTable from '@/Components/Modules/Tables/ProductsTable/ProductsTable';
import Link from 'next/link';
import React from 'react';

export default function LastProductSection() {
    return (
        <section className="box">
            <div className="px-6 py-3 border-b border-zinc-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-zinc-500">
                    Last Products
                </h2>
                <Link
                    href={'/admin/products'}
                    className="text-blue-400 hover:text-blue-500"
                >
                    View All
                </Link>
            </div>
            <div className="p-6">
                <div className="h-80 overflow-scroll">
                    <ProductsTable />
                </div>
            </div>
        </section>
    );
}
