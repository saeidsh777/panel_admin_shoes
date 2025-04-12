import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import UsersSection from './UsersSection/UsersSection';

export default function UsersTemplate() {
    return (
        <main>
            <BreadCrumbPanel title="User List" />
            <UsersSection/>
        </main>
    );
}
