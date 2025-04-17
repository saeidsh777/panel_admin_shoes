import Image from 'next/image';
import React from 'react';

export default function PhotoSlide({image}:{image:string}) {
    return (
        <div className="bg-zinc-100 overflow-hidden rounded-2xl aspect-[1/1.1]">
            <Image
                className="size-full"
                src={image}
                width={500}
                height={500}
                alt="product image"
            />
        </div>
    );
}
