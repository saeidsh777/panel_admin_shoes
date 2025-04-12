import TopProductsTable from '@/Components/Modules/Tables/TopProductsTable/TopProductsTable';
import Link from 'next/link';
import React from 'react';

export default function TopProductsSection() {
    return (
        <section className="box mb-8 lg:mb-0">
            <div className="px-6 py-3 border-b border-zinc-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-zinc-500">
                    Top Products
                </h2>
                <Link
                    href={'/admin/products/top-products'}
                    className="text-blue-400 hover:text-blue-500"
                >
                    View All
                </Link>
            </div>
            <div className="p-6">
                <div className="h-80 overflow-scroll">
                    <TopProductsTable />
                </div>
            </div>
        </section>
    );
}
