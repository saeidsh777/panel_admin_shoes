'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { MdOutlineModeEdit } from 'react-icons/md';
const defaultImage = '/images/products/upload-thumb-preview.jpg';
export default function ProductPhotoInput({name}:{name:string}) {
    const [image, setImage] = useState(defaultImage);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            const imageUrl = URL.createObjectURL(selectedFile);
            setImage(imageUrl);
            setImageFile(e.target.files[0]);
        } else {
            setImageFile(null);
        }
    };

    const removeImg = () => {
        setImage(defaultImage);
        setImageFile(null);
    };
    return (
        <div className=" border border-zinc-100 rounded-2xl p-1">
            <div className="w-20 h-20 bg-zinc-100 rounded-2xl flex justify-center overflow-hidden relative">
                <Image
                    src={image}
                    width={500}
                    height={500}
                    className="size-full object-cover"
                    alt="Upload Preview"
                />
                <label className="absolute top-1 right-1 z-1" htmlFor={name}>
                    <span className="p-1 bg-white text-zinc-500 text-2xl w-6 h-6 cursor-pointer shadow-md hover:shadow-xl flex justify-center items-center rounded-md">
                        <MdOutlineModeEdit />
                    </span>
                    <input
                        id={name}
                        type="file"
                        hidden
                        onChange={handleImageChange}
                        accept=".png, .jpg, .jpeg, .svg"
                    />
                </label>
                {imageFile && (
                    <span
                        className="absolute top-2 left-1 bg-red-300 text-red-800 text-2xl w-4 h-4 cursor-pointer hover:bg-red-400 hover:text-white flex justify-center items-center rounded-2xl z-1"
                        onClick={removeImg}
                    >
                        <IoIosClose />
                    </span>
                )}
            </div>
        </div>
    );
}
