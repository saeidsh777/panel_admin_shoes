import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import ProductSection from './ProductSection/ProductSection';

export default function ProductTemplate() {
    return (
        <main>
            <BreadCrumbPanel title="Product" />
            <ProductSection/>
        </main>
    );
}
