import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import ProductsSection from './ProductsSection/ProductsSection';

export default function ProductsTemplate() {
    return (
        <main>
            <BreadCrumbPanel title="Products List" />
            <ProductsSection />
        </main>
    );
}
