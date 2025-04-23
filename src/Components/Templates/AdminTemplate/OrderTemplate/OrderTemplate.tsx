import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import OrderSection from './OrderSection/OrderSection';

export default function OrderTemplate() {
    return (
        <main>
            <BreadCrumbPanel title="Order Detail" />
            <OrderSection />
        </main>
    );
}
