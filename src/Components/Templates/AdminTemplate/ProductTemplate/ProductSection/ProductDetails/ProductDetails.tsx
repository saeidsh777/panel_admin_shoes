import Link from 'next/link';
import React from 'react';

export default function ProductDetails() {
    return (
        <div>
            <div>
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-xl text-zinc-500">
                        Product Name
                    </h3>

                    <Link href={'/admin/products/edit'} className="btn_global">
                        Edit
                    </Link>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <p className="text-zinc-500">Brand: </p>
                    <Link
                        href={'/admin/brands/brandName'}
                        className="text-zinc-400 hover:text-zinc-500"
                    >
                        Adidas
                    </Link>
                </div>
                <div className="mt-8">
                    <h4 className="font-semibold text-zinc-500">
                        Product Description:
                    </h4>
                    <p className="text-zinc-400 text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Consequatur, blanditiis earum. Facere quaerat
                        ipsum fugit numquam rem obcaecati, cupiditate voluptate.
                        Excepturi ratione harum eligendi iusto quisquam sint
                        voluptatem, officiis odio ea saepe quae, cupiditate
                        blanditiis magnam eveniet adipisci dolorem impedit eos
                        ut at, a nisi et explicabo. Sed, culpa. Aliquam velit,
                        sequi et animi consequatur ipsam, provident maxime
                        quidem cum rerum impedit est tempora delectus in iste,
                        iure officiis incidunt laboriosam saepe cupiditate. Est
                        doloribus similique quia voluptas, autem sed numquam,
                        dolorum fugit eius voluptatibus ipsam suscipit obcaecati
                        enim alias ex necessitatibus natus voluptates libero
                        repudiandae. Itaque magni maiores ipsum?
                    </p>
                    <div className="mt-6">
                        <div>
                            <p className="text-zinc-500">
                                Sizes:{' '}
                                <span className="text-zinc-400">
                                    39 | 40 | 41
                                </span>
                            </p>
                            <div className="text-zinc-500 flex items-center gap-2">
                                Colors:{' '}
                                <div className="flex gap-2 items-center">
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200`}
                                    ></span>
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-yellow-300`}
                                    ></span>
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-pink-300`}
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="font-semibold text-zinc-500 mt-8">
                        Price: $650 - $670
                    </h4>
                </div>
            </div>
            <div className="mt-8 p-4 rounded-2xl border border-zinc-200 overflow-x-scroll">
                <table className="w-full whitespace-nowrap text-xs md:text-base">
                    <thead>
                        <tr className='text-zinc-400 pb-4 text-left [&>th]:pe-8"'>
                            <th>#Size</th>
                            <th>Color/Stock/Price</th>
                            <th>All Stock</th>
                        </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                        <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                            <td>39</td>
                            <td className="flex items-center gap-4">
                                <div className="inline-flex flex-col justify-center items-center gap-1">
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-white`}
                                    ></span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        {50}
                                    </span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        $ 50
                                    </span>
                                </div>
                                <div className="inline-flex flex-col justify-center items-center gap-1">
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-yellow-300`}
                                    ></span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        {50}
                                    </span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        $ 50
                                    </span>
                                </div>
                                <div className="inline-flex flex-col justify-center items-center gap-1">
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-blue-300`}
                                    ></span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        {50}
                                    </span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        $ 50
                                    </span>
                                </div>
                            </td>
                            <td>150</td>
                        </tr>
                        <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                            <td>40</td>
                            <td className="flex items-center gap-4">
                                <div className="inline-flex flex-col justify-center items-center gap-1">
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-white`}
                                    ></span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        {50}
                                    </span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        $ 50
                                    </span>
                                </div>
                                <div className="inline-flex flex-col justify-center items-center gap-1">
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-yellow-300`}
                                    ></span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        {50}
                                    </span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        $ 50
                                    </span>
                                </div>
                                <div className="inline-flex flex-col justify-center items-center gap-1">
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-blue-300`}
                                    ></span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        {50}
                                    </span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        $ 50
                                    </span>
                                </div>
                            </td>
                            <td>150</td>
                        </tr>
                        <tr className="[&>td]:py-6 [&>td]:pe-8 border-b border-zinc-100">
                            <td>41</td>
                            <td className="flex items-center gap-4">
                                <div className="inline-flex flex-col justify-center items-center gap-1">
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-white`}
                                    ></span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        {50}
                                    </span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        $ 50
                                    </span>
                                </div>
                                <div className="inline-flex flex-col justify-center items-center gap-1">
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-yellow-300`}
                                    ></span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        {50}
                                    </span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        $ 50
                                    </span>
                                </div>
                                <div className="inline-flex flex-col justify-center items-center gap-1">
                                    <span
                                        className={`w-4 h-4 rounded-md block border border-zinc-200 bg-blue-300`}
                                    ></span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        {50}
                                    </span>
                                    <hr className="border border-zinc-100 w-full" />
                                    <span className="items-center text-xs text-zinc-400">
                                        $ 50
                                    </span>
                                </div>
                            </td>
                            <td>150</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
