import Image from 'next/image';
import React from 'react';

type Props = {
    src: string;
    name: string;
};

export default function BrandItem({ src, name }: Props) {
    return (
        <div className="border border-zinc-200 rounded-xl p-2 flex flex-col items-center">
            <div className="aspect-square p-2">
                <Image
                    src={src}
                    width={500}
                    height={500}
                    alt="brand image"
                    className="w-full h-full"
                />
            </div>
            <div className="bg-zinc-50 w-full py-1 text-center text-zinc-600 capitalize">
                {name}
            </div>
        </div>
    );
}
