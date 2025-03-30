'use client';
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks';
import { showAside } from '@/redux/slices/showMenu';
import { TbCircuitSwitchClosed, TbCircuitSwitchOpen } from 'react-icons/tb';

export default function MenuIcon() {
    const showMenu = useAppSelector((state) => state.adminMenu.aside);
    const dispatch = useAppDispatch();

    return (
        <div>
            {showMenu ? (
                <TbCircuitSwitchClosed
                    className="text-3xl text-blue-400 bg-blue-50 rounded-full aspect-square p-1 cursor-pointer"
                    onClick={() => dispatch(showAside())}
                />
            ) : (
                <TbCircuitSwitchOpen
                    className="text-3xl text-red-400 bg-red-50 rounded-full aspect-square p-1 cursor-pointer"
                    onClick={() => dispatch(showAside())}
                />
            )}
        </div>
    );
}
