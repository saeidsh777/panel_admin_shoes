import React from 'react';
import OrderDetailTable from './OrderDetailTable/OrderDetailTable';
import PrintBtn from './PrintBtn/PrintBtn';

export default function OrderSection() {
    return (
        <section className="box mt-8">
            <div className="p-4 border-b border-zinc-200 flex items-center justify-between">
                <h3 className="font-semibold text-zinc-600">
                    Order Id: <span className="font-light">#2054</span>
                </h3>
                <PrintBtn />
            </div>
            <div id="print-container">
                <div className="p-4 text-zinc-500 grid lg:grid-cols-3 gap-6">
                    <div className="rounded-lg overflow-hidden border border-zinc-300">
                        <div className="bg-zinc-100 px-4 py-2 ">
                            <h3 className="font-semibold">From:</h3>
                        </div>
                        <div className="px-4 py-6 text-sm">
                            <p className="font-semibold">EKKA</p>
                            <p>47 Elita Squre, VIP Chowk, </p>
                            <p className="font-semibold mt-2">
                                Email:{' '}
                                <span className="font-light">
                                    {' '}
                                    example@gmail.com
                                </span>
                            </p>
                            <p className="font-semibold">
                                Phone:{' '}
                                <span className="font-light">
                                    {' '}
                                    +91 5264 251 325{' '}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden border border-zinc-300">
                        <div className="bg-zinc-100 px-4 py-2 ">
                            <h3 className="font-semibold">To:</h3>
                        </div>
                        <div className="px-4 py-6 text-sm">
                            <p className="font-semibold">Saeid Shojaei</p>
                            <p>
                                47 Elita Squre, VIP Chowk,Lorem ipsum dolor sit
                                amet consectetur, adipisicing elit. Magnam nulla
                                totam nobis eum ducimus deleniti numquam,
                                pariatur eligendi error vitae.{' '}
                            </p>
                            <p className="font-semibold mt-2">
                                Email:{' '}
                                <span className="font-light">
                                    {' '}
                                    example@gmail.com
                                </span>
                            </p>
                            <p className="font-semibold">
                                Phone:{' '}
                                <span className="font-light">
                                    {' '}
                                    +91 5264 251 325{' '}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden border border-zinc-300">
                        <div className="bg-zinc-100 px-4 py-2 ">
                            <h3 className="font-semibold">Details:</h3>
                        </div>
                        <div className="px-4 py-6 text-sm">
                            <p className="font-semibold mb-1">
                                Order ID:{' '}
                                <span className="text-zinc-700"> #25066</span>
                            </p>
                            <p className="font-semibold">
                                Date:{' '}
                                <span className="font-light">
                                    {' '}
                                    March 25, 2018
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <OrderDetailTable />
            </div>
            
        </section>
    );
}
