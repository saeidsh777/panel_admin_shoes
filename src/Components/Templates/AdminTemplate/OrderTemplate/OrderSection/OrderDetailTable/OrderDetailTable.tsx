import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function OrderDetailTable() {
    return (
        <div className="my-6 p-4">
            <div className="bg-zinc-100 py-2 text-zinc-600">
                <h3 className="text-center font-semibold text-sm">
                    PRODUCT SUMMARY
                </h3>
            </div>
            <div className="mt-8 overflow-x-scroll">
                <table className="w-full whitespace-nowrap text-xs md:text-base">
                    <thead>
                        <tr className="text-zinc-400 pb-4 border-b border-zinc-200 text-left [&>th]:pe-8">
                            <th>#</th>
                            <th>PRODUCT</th>
                            <th>BRAND</th>
                            <th>SIZE</th>
                            <th>COLOR</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody className="text-zinc-500 border-b border-zinc-300 [&>tr]:odd:bg-zinc-50/50">
                        <tr className="[&>td]:py-2 [&>td]:pe-8">
                            <td>1</td>
                            <td className="font-semibold">
                                <Link
                                    href={`/admin/product/product.slug`}
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
                                    {/* {product.productName} */}
                                    Adidas
                                </Link>
                            </td>
                            <td >
                                <Link href={'/admin/brands/brandName'} className="flex items-center gap-2">
                                    <Image
                                        src={'/images/products/p1.jpg'}
                                        width={500}
                                        height={500}
                                        alt="brand image"
                                        className="w-8 h-8 rounded-lg"
                                    />
                                    Adidas
                                </Link>
                            </td>
                            <td>42</td>
                            <td>
                                <span className="w-4 h-4 border border-zinc-100 rounded-md bg-amber-200 block"></span>
                            </td>
                            <td>$36</td>
                            <td>2</td>
                            <td>$72</td>
                        </tr>
                        
                    </tbody>
                    <tfoot className="text-zinc-500 font-semibold ">
                        <tr className="[&>td]:py-2 [&>td]:pe-8 bg-zinc-50">
                            <td colSpan={6}></td>
                            <td className="text-right">Subtotal:</td>
                            <td>$250</td>
                        </tr>
                        <tr className="[&>td]:py-2 [&>td]:pe-8">
                            <td colSpan={6}></td>
                            <td className="text-right">Shipping Cost:</td>
                            <td>$5</td>
                        </tr>
                        <tr className="[&>td]:py-2 [&>td]:pe-8 bg-zinc-100 border-2 border-zinc-400">
                            <td colSpan={6}></td>
                            <td className="text-right">Total:</td>
                            <td>$300</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
