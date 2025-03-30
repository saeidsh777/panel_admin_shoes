'use client';
import { useAppDispatch } from '@/redux/reduxHooks';
import { showAside } from '@/redux/slices/showMenu';
import { IoClose } from 'react-icons/io5';

export default function CloseAsideBtn() {
    const dispatch = useAppDispatch();

    return (
        <span
            className="absolute top-1/2 -translate-y-1/2 right-2 text-zinc-500 cursor-pointer lg:hidden"
            onClick={() => dispatch(showAside())}
        >
            <IoClose />
        </span>
    );
}
