import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import NewProductSection from './NewProductSection/NewProductSection';

export default function NewProductTemplate() {
    return (
        <main>
            <BreadCrumbPanel title="Add New Product" />
            <NewProductSection/>
        </main>
    );
}
