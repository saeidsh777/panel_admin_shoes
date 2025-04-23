import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';
export default function ProductForm() {
    return (
        <div className="px-4">
            <form action="" className="text-zinc-400">
                <div className="flex gap-8 mb-8">
                    <div className="flex-1">
                        <label
                            className="font-semibold mb-2 inline-block"
                            htmlFor="name"
                        >
                            Product Name
                        </label>
                        <input
                            className="border border-zinc-200 rounded-xl h-11 px-4 outline-0 w-full"
                            id="name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label
                            className="font-semibold mb-2 inline-block"
                            htmlFor="brand"
                        >
                            Brand
                        </label>
                        <select
                            className="border border-zinc-200 rounded-xl h-11 px-4 outline-0 w-full"
                            id="brand"
                        >
                            <option value="-1">Select Brand ...</option>
                            <option value="-1">Adidas</option>
                            <option value="-1">Nike</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label
                        className="font-semibold mb-2 inline-block"
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea
                        className="border border-zinc-200 rounded-xl h-48 resize-y block max-h-48 p-4 outline-0 w-full overflow-y-scroll"
                        id="description"
                    />
                </div>
                <div className=" mt-4 pt-2 max-h-[30rem] overflow-scroll">
                    <button className="sticky top-0 left-0 py-1 px-4 border border-blue-300 bg-blue-50 text-blue-300 rounded-xl cursor-pointer hover:bg-blue-100 z-1">
                        New Size
                    </button>
                    <div className="py-4 flex flex-col gap-4">
                        <div className="bg-zinc-50 p-4 rounded-xl border-2 border-zinc-200 relative">
                            <div className="flex items-center gap-4">
                                <div className="">
                                    <label
                                        className="font-semibold mr-1"
                                        htmlFor="size"
                                    >
                                        Size:
                                    </label>
                                    <input
                                        className="border border-zinc-200 rounded-xl h-10 w-14 px-2 text-center outline-0 bg-white"
                                        id="size"
                                        type="text"
                                    />
                                </div>
                                <button type='button' className="ms-4 p-2 rounded-md border border-zinc-200 bg-white cursor-pointer hover:shadow-md">
                                    New Color
                                </button>
                            </div>

                            <div className="border border-zinc-200 mt-4 p-4 rounded-md flex items-center flex-wrap gap-6 relative">
                                <div className="flex items-center gap-2">
                                    <label className="font-semibold">
                                        Color:
                                    </label>
                                    <input
                                        className="border border-zinc-200 rounded-md h-6 w-6 text-center outline-0 bg-white"
                                        type="color"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="font-semibold">
                                        Stock:
                                    </label>
                                    <input
                                        className="border border-zinc-200 rounded-xl h-10 w-20 px-2 outline-0 bg-white"
                                        type="text"
                                    />
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <label className="font-semibold">
                                        Price:
                                    </label>
                                    <input
                                        className="border border-zinc-200 rounded-xl h-10 min-w-20 px-2 outline-0 bg-white"
                                        type="text"
                                    />
                                </div>
                                <span className="absolute top-1 right-1 bg-red-300 text-red-800 text-2xl w-4 h-4 cursor-pointer hover:bg-red-400 hover:text-white flex justify-center items-center rounded-2xl z-1">
                                    <IoIosClose />
                                </span>
                            </div>
                            <div className="border border-zinc-200 mt-4 p-4 rounded-md flex items-center flex-wrap gap-6 relative">
                                <div className="flex items-center gap-2">
                                    <label className="font-semibold">
                                        Color:
                                    </label>
                                    <input
                                        className="border border-zinc-200 rounded-md h-6 w-6 text-center outline-0 bg-white"
                                        type="color"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="font-semibold">
                                        Stock:
                                    </label>
                                    <input
                                        className="border border-zinc-200 rounded-xl h-10 w-20 px-2 outline-0 bg-white"
                                        type="text"
                                    />
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <label className="font-semibold">
                                        Price:
                                    </label>
                                    <input
                                        className="border border-zinc-200 rounded-xl h-10 min-w-20 px-2 outline-0 bg-white"
                                        type="text"
                                    />
                                </div>
                                <span className="absolute top-1 right-1 bg-red-300 text-red-800 text-2xl w-4 h-4 cursor-pointer hover:bg-red-400 hover:text-white flex justify-center items-center rounded-2xl z-1">
                                    <IoIosClose />
                                </span>
                            </div>

                            {/* remove size */}
                            <span className="absolute top-1 right-4 text-red-800 text-xl cursor-pointer hover:text-red-700 flex justify-center items-center rounded-2xl z-1">
                                <AiFillDelete/>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </form>
        </div>
    );
}
