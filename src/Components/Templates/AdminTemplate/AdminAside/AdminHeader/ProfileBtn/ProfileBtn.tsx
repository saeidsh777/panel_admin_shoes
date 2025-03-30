'use client';
import Image from 'next/image';
import { TiArrowSortedDown } from 'react-icons/ti';
import ProfileSubmenu from './ProfileSubmenu/ProfileSubmenu';
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks';
import { showProfileMenu } from '@/redux/slices/showMenu';

export default function ProfileBtn() {
    const dispatch = useAppDispatch();
    const profileMenu = useAppSelector((state) => state.adminMenu.profileMenu);
    return (
        <div>
            <div
                className="flex items-center gap-2 cursor-pointer relative z-10"
                onClick={() => dispatch(showProfileMenu())}
            >
                <div className="w-12 h-12 overflow-hidden bg-zinc-200 rounded-full">
                    <Image
                        src={'/images/user/user-default-men.svg'}
                        width={500}
                        height={500}
                        alt="profile image"
                        className="size-full"
                    />
                </div>
                <TiArrowSortedDown className="text-zinc-500" />
                {profileMenu && <ProfileSubmenu />}
            </div>
            {profileMenu && (
                <div
                    className="absolute left-0 top-0 w-screen h-screen"
                    onClick={() => dispatch(showProfileMenu())}
                ></div>
            )}
        </div>
    );
}
