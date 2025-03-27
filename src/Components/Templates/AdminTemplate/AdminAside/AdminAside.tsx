import React from 'react';
import AsideLogo from './AsideLogo/AsideLogo';
import NavlinkAside from './NavbarAside/NavbarAside';

export default function AdminAside() {
    return (
        <aside className="w-22 w-[15rem] h-svh overflow-y-scroll overflow-x-hidden border-r border-gray-200">
            <AsideLogo />
            <NavlinkAside />
        </aside>
    );
}
