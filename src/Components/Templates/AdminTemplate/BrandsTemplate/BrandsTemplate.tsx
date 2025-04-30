import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import BrandsSection from './BrandsSection/BrandsSection';

export default function BrandsTemplate() {
    return (
        <main>
            <BreadCrumbPanel title="Brands" />
            <BrandsSection/>
        </main>
    );
}
