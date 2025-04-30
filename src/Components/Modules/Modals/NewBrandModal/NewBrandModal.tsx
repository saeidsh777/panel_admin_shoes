'use client';
import React from 'react';
import BrandPhotoInput from './BrandPhotoInput/BrandPhotoInput';
import { IoIosClose } from 'react-icons/io';
import { hideModal } from '@/redux/slices/showModal';
import { useAppDispatch } from '@/redux/reduxHooks';

export default function NewBrandModal() {
    const dispatch = useAppDispatch();

    return (
        <div className="relative bg-white border border-zinc-200 rounded-xl w-full max-w-2xl">
            <div className="p-4 border-b border-zinc-200 flex justify-between items-center">
                <h3 className="font-semibold text-xl text-zinc-600">
                    New Brand
                </h3>
                <IoIosClose
                    className="text-2xl text-zinc-600 cursor-pointer"
                    onClick={() => dispatch(hideModal())}
                />
            </div>
            <div className="p-4 text-zinc-400">
                <form action="">
                    <div className="flex flex-col justify-center items-center bg-zinc-50 px-2 py-4 mb-2">
                        <BrandPhotoInput />
                        <small className="mt-2">Brand Photo</small>
                    </div>
                    <div>
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
                    <button className="btn_global mt-6 w-full">Save</button>
                </form>
            </div>
        </div>
    );
}
