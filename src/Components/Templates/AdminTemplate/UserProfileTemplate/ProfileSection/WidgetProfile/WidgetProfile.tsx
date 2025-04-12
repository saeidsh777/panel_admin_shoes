import Image from 'next/image';
import React from 'react';

export default function WidgetProfile() {
    return (
        <div className="px-4 pt-6">
            <div className="border-b border-zinc-200">
                <div className="w-24 h-24 overflow-hidden rounded-2xl bg-zinc-200 mx-auto">
                    <Image
                        className="size-full"
                        src={'/images/user/user-default-men.svg'}
                        width={500}
                        height={500}
                        alt="profile image"
                    />
                </div>
                <div className="my-4">
                    <h3 className="text-center font-semibold">Saeid Shojaei</h3>
                    <h4 className="text-center text-sm text-zinc-400">Saeid@gmail.com</h4>
                </div>
            </div>
        </div>
    );
}
