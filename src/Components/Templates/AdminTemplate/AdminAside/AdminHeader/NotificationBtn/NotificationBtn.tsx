'use client';
import { IoMdNotificationsOutline } from 'react-icons/io';
import NotificationSubmenu from './NotificationSubmenu/NotificationSubmenu';
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks';
import { showNotifMenu } from '@/redux/slices/showMenu';

export default function NotificationBtn() {
    const dispatch = useAppDispatch();
    const notifMenu = useAppSelector((state) => state.adminMenu.notifMenu);

    return (
        <div>
            <div className="cursor-pointer relative z-10">
                <div className="relative">
                    <IoMdNotificationsOutline
                        className="text-3xl text-zinc-500"
                        onClick={() => {
                            dispatch(showNotifMenu());
                        }}
                    />
                    <span className="w-2 h-2 bg-red-400 rounded-full block absolute top-0 right-0"></span>
                </div>
                {notifMenu && <NotificationSubmenu />}
            </div>
            {notifMenu && (
                <div
                    className="absolute left-0 top-0 w-screen h-screen"
                    onClick={() => dispatch(showNotifMenu())}
                ></div>
            )}
        </div>
    );
}
