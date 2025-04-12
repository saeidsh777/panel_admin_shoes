'use client';
import React, { useEffect, useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';

export default function Actions({id}:{id:string}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            !event.target ||
            (event.target as HTMLElement).getAttribute('id') != id
        ) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <td className="menu-container relative" >
            <button onClick={handleClick} >
                <CiMenuKebab className="cursor-pointer" id={id}/>
            </button>
            {isVisible && (
                <div className="absolute right-2/3 box p-4 bg-white z-10">
                    <ul>
                        <li className="py-1 cursor-pointer hover:text-blue-400">
                            View
                        </li>
                        <li className="py-1 cursor-pointer hover:text-blue-400">
                            Remove
                        </li>
                    </ul>
                </div>
            )}
        </td>
    );
}
