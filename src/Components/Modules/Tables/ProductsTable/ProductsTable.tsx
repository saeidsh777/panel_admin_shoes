import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// const allProducts = [
//     {
//         _id: 'fkmd351df516df50',
//         productId: '2405',
//         brand: {
//             name: 'Adidas',
//             brandID: 'kjksd5s4ds',
//         },
//         model: 'K512',
//         image: '/images/products/p1.jpg',
//         sizes: [
//             {
//                 id: 'klskd5s45d5s4fbg',
//                 number: 42,
//                 quantity: 10,
//                 price: 250,
//             },
//             {
//                 id: 'klskd5s45d5s4fbg',
//                 number: 39,
//                 quantity: 5,
//                 price: 250,
//             },
//             {
//                 id: 'klskd5s45d5s4fbg',
//                 number: 40,
//                 quantity: 3,
//                 price: 250,
//             },
//         ],
//     },
// ];

export default function ProductsTable() {
    return (
        <table className="w-full whitespace-nowrap text-xs md:text-base">
            <thead className="sticky top-0 left-0 w-full bg-white outline-1 outline-zinc-200">
                <tr className="text-zinc-400 pb-4 text-left [&>th]:pe-8 ">
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Sizes</th>
                    <th>Colors</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody className="text-zinc-500 ">
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100 relative">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/products/productName'}
                            className="flex items-center gap-2"
                        >
                            <div className="w-12 h-12 rounded-lg overflow-hidden">
                                <Image
                                    className="size-full"
                                    src={'/images/products/p1.jpg'}
                                    width={500}
                                    height={500}
                                    alt="product image"
                                />
                            </div>
                            Adidas K512
                        </Link>
                    </td>
                    <td>
                        <Link href={'/admin/brands/brandName'}>Adidas</Link>
                    </td>
                    <td>
                        <div className="flex items-center gap-1">
                            <span className="group cursor-pointer relative border-b border-yellow-300">
                                42
                                <span className="bg-yellow-300 w-5 h-5 rounded-md flex justify-center items-center text-xs text-zinc-400 absolute bottom-full opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                                    6
                                </span>
                            </span>
                            |
                            <span className="group cursor-pointer relative border-b border-green-300">
                                40
                                <span className="bg-green-300 w-5 h-5 rounded-md flex justify-center items-center text-xs text-zinc-400 absolute bottom-full opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                                    10
                                </span>
                            </span>
                            |
                            <span className="group cursor-pointer relative border-b border-red-300">
                                40
                                <span className="bg-red-300 w-5 h-5 rounded-md flex justify-center items-center text-xs text-zinc-400 absolute bottom-full opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                                    0
                                </span>
                            </span>
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center gap-1">
                            <span className="group cursor-pointer relative w-4 h-4 rounded-md bg-amber-200 block">
                                <span className="bg-zinc-100 w-4 h-4 rounded-md flex justify-center items-center text-xs text-zinc-500 absolute bottom-full opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                                    10
                                </span>
                            </span>
                            <span className="group cursor-pointer relative w-4 h-4 rounded-md bg-green-200 block">
                                <span className="bg-zinc-100 w-4 h-4 rounded-md flex justify-center items-center text-xs text-zinc-500 absolute bottom-full opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                                    4
                                </span>
                            </span>
                            <span className="group cursor-pointer relative w-4 h-4 rounded-md bg-red-200 block">
                                <span className="bg-zinc-100 w-4 h-4 rounded-md flex justify-center items-center text-xs text-zinc-500 absolute bottom-full opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                                    8
                                </span>
                            </span>
                        </div>
                    </td>
                    <td>$650 - $720</td>
                </tr>
            </tbody>
        </table>
    );
}
