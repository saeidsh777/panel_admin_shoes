'use client';
import MenuIcon from './MenuIcon/MenuIcon';
import SearchInput from './SearchInput/SearchInput';
import ProfileBtn from './ProfileBtn/ProfileBtn';
import NotificationBtn from './NotificationBtn/NotificationBtn';
import { useAppSelector } from '@/redux/reduxHooks';
export default function AdminHeader() {
    const showMenu = useAppSelector((state) => state.adminMenu.aside);

    return (
        <div
            className={`fixed w-full bg-white transition-all border-b border-gray-200 lg:border-b-0 pb-4 lg:pb-0 ${
                showMenu ? 'lg:ps-[15rem]' : 'lg:ps-16'
            }`}
        >
            <div className="px-8 flex items-center justify-between h-[70px]  lg:border-b lg:border-gray-200">
                <div className="flex items-center gap-8">
                    <MenuIcon />
                    <div className="hidden lg:block">
                        <SearchInput />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <ProfileBtn />
                    <div className="w-px h-8 bg-zinc-200"></div>
                    <NotificationBtn />
                </div>
            </div>
            <div className="lg:hidden px-8">
                <SearchInput />
            </div>
        </div>
    );
}
