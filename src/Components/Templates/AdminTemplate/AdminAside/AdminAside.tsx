'use client';
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks';
import AsideLogo from './AsideLogo/AsideLogo';
import NavlinkAside from './NavbarAside/NavbarAside';
import { showAside } from '@/redux/slices/showMenu';

export default function AdminAside() {
    const showMenu = useAppSelector((state) => state.adminMenu.aside);
    const dispatch = useAppDispatch();
    return (
        <div>
            <div
                className={`fixed left-0 top-0 w-screen h-screen backdrop-blur-[2px] lg:hidden z-30 ${
                    showMenu ? 'block' : 'hidden'
                }`}
                onClick={() => dispatch(showAside())}
            ></div>
            <aside
                className={`group fixed -translate-x-full lg:translate-x-0 top-0 left-0 h-svh overflow-y-scroll overflow-x-hidden border-r border-gray-200 z-30 bg-white transition-all ${
                    showMenu
                        ? 'w-[15rem] translate-x-0'
                        : 'w-16 lg:hover:w-[15rem]'
                }`}
            >
                <AsideLogo />
                <NavlinkAside />
            </aside>
        </div>
    );
}
