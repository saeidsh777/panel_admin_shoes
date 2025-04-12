'use client';

import { useAppSelector } from '@/redux/reduxHooks';

export default function AdminTemplate({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const showMenu = useAppSelector((state) => state.adminMenu.aside);
    return (
        <div
            className={`pt-[70px] transition-all ${
                showMenu ? 'lg:ps-[15rem]' : 'lg:ps-16'
            }`}
        >
            <div className="p-4 lg:p-8 pt-20 lg:pt-8">{children}</div>
        </div>
    );
}
