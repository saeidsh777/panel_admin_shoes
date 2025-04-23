import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import TopProductsSection from './TopProductsSection/TopProductsSection';

export default function TopProductTemplate() {
    return (
        <main>
            <BreadCrumbPanel title="Top Products" />
            <TopProductsSection/>
        </main>
    );
}
