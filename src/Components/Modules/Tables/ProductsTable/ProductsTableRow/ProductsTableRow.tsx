import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductType } from '../ProductsTable';

const borderGenerator = (number: number) => {
    if (number >= 10) return 'border-green-300';
    if (number < 10) return 'border-yellow-300';
    if (number == 10) return 'border-red-300';
};
const bgGenerator = (number: number) => {
    if (number >= 10) return 'bg-green-300';
    if (number < 10) return 'bg-yellow-300';
    if (number == 10) return 'bg-red-300';
};

export default function ProductsTableRow({ product }: {product:ProductType}) {
    return (
        <tr
            key={product._id}
            className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100 relative"
        >
            <td className="font-semibold">
                <Link
                    href={`/admin/product/${product.slug}`}
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
                    {product.productName}
                </Link>
            </td>
            <td>
                <Link href={`/admin/brands/${product.brand.slug}`}>
                    {product.brand.name}
                </Link>
            </td>
            <td>
                <div className="flex items-center gap-1">
                    {product.sizes
                        .sort((a, b) => a.size.number - b.size.number)
                        .map((size, index) => (
                            <React.Fragment key={size.id}>
                                <span
                                    className={`relative border-b ${borderGenerator(
                                        size.size.stock
                                    )}`}
                                >
                                    {size.size.number}
                                    <span
                                        className={`w-4 h-4 md:w-5 md:h-5 rounded-md flex justify-center items-center text-xs text-zinc-400 absolute bottom-full ${bgGenerator(
                                            size.size.stock
                                        )}`}
                                    >
                                        {size.size.stock}
                                    </span>
                                </span>
                                {product.sizes.length != index + 1 && '|'}
                            </React.Fragment>
                        ))}
                </div>
            </td>
            <td>
                <div className="flex items-center gap-1">
                    {product.colors.map((color) => (
                        <span
                            key={color.id}
                            className={`relative w-4 h-4 rounded-md ${color.bg} block border border-zinc-200`}
                        >
                            <span className="bg-zinc-100 w-4 h-4 rounded-md flex justify-center items-center text-xs text-zinc-500 absolute bottom-full ">
                                {color.stock}
                            </span>
                        </span>
                    ))}
                </div>
            </td>
            <td>{product.priceRenge}</td>
        </tr>
    );
}
