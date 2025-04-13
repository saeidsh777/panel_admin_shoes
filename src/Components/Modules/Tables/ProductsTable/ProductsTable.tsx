import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductsTable() {
    return (
        <table className="w-full whitespace-nowrap text-xs md:text-base">
            <thead className="sticky top-0 left-0 w-full bg-white outline-1 outline-zinc-200">
                <tr className="text-zinc-400 pb-4 text-left [&>th]:pe-8 ">
                    <th>Name</th>
                    <th>Model</th>
                    <th>Quantity</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody className="text-zinc-500 ">
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/products/productName/productModel'}
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
                            Adidas
                        </Link>
                    </td>
                    <td>K512</td>
                    <td>105</td>
                    <td>$650</td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/products/productName/productModel'}
                            className="flex items-center gap-2"
                        >
                            <div className="w-12 h-12 rounded-lg overflow-hidden">
                                <Image
                                    className="size-full"
                                    src={'/images/products/p2.jpg'}
                                    width={500}
                                    height={500}
                                    alt="product image"
                                />
                            </div>
                            Adidas
                        </Link>
                    </td>
                    <td>K512</td>
                    <td>105</td>
                    <td>$650</td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/products/productName/productModel'}
                            className="flex items-center gap-2"
                        >
                            <div className="w-12 h-12 rounded-lg overflow-hidden">
                                <Image
                                    className="size-full"
                                    src={'/images/products/p3.jpg'}
                                    width={500}
                                    height={500}
                                    alt="product image"
                                />
                            </div>
                            Adidas
                        </Link>
                    </td>
                    <td>K512</td>
                    <td>105</td>
                    <td>$650</td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/products/productName/productModel'}
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
                            Adidas
                        </Link>
                    </td>
                    <td>K512</td>
                    <td>105</td>
                    <td>$650</td>
                </tr>
                <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                    <td className="font-semibold">
                        <Link
                            href={'/admin/products/productName/productModel'}
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
                            Adidas
                        </Link>
                    </td>
                    <td>K512</td>
                    <td>105</td>
                    <td>$650</td>
                </tr>
            </tbody>
        </table>
    );
}
