'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { MdOutlineModeEdit } from 'react-icons/md';
const defaultImage = '/images/products/upload-preview-main.jpg';
export default function ProductMainPhotoInput() {
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
        <div className=" border border-zinc-100 rounded-2xl p-4 max-w-80 mx-auto">
            <div className="w-full h-full max-h-[24rem] bg-zinc-100 rounded-2xl flex justify-center overflow-hidden relative">
                <Image
                    src={image}
                    width={500}
                    height={500}
                    className="size-full"
                    alt="Upload Preview"
                />
                <label
                    className="absolute top-2 right-2 z-1"
                    htmlFor="main_image"
                >
                    <span className="p-1 bg-white text-zinc-500 text-2xl w-12 h-12 cursor-pointer shadow-md hover:shadow-xl flex justify-center items-center rounded-xl">
                        <MdOutlineModeEdit />
                    </span>
                    <input
                        id="main_image"
                        type="file"
                        hidden
                        onChange={handleImageChange}
                        accept=".png, .jpg, .jpeg, .svg"
                    />
                </label>
                {imageFile && (
                    <span
                        className="absolute top-4 left-2 bg-red-300 text-red-800 text-2xl w-4 h-4 cursor-pointer hover:bg-red-400 hover:text-white flex justify-center items-center rounded-2xl z-1"
                        onClick={removeImg}
                    >
                        <IoIosClose />
                    </span>
                )}
            </div>
        </div>
    );
}
