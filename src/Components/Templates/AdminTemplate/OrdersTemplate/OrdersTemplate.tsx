import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import OrdersSection from './OrdersSection/OrdersSection';

export default function OrdersTemplate() {
    return (
        <main>
            <BreadCrumbPanel title="Orders" />
            <OrdersSection />
        </main>
    );
}
