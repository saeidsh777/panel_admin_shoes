'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { TbPhotoEdit } from 'react-icons/tb';

export default function EditablePhoto() {
    const [isImage, setIsImage] = useState('');
    const [defaultImg, setDefaultImg] = useState('');
    const [image, setImage] = useState<File | null>(null);
    console.log(image);

    const defaultImgChanger = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value == '-1') {
            setDefaultImg('');
        } else {
            setDefaultImg(e.target.value);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (defaultImg) setDefaultImg('');
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            const imageUrl = URL.createObjectURL(selectedFile);
            setIsImage(imageUrl);
            setImage(e.target.files[0]);
        } else {
            setImage(null);
            setIsImage('');
        }
    };

    const removeImg = () => {
        setIsImage('');
        setDefaultImg('');
        setImage(null);
    };

    return (
        <div className="w-24 group">
            {defaultImg && !isImage && (
                <div className="w-24 h-24 overflow-hidden rounded-2xl bg-zinc-200 relative z-1 shadow-lg">
                    <Image
                        className="size-full"
                        src={defaultImg}
                        width={500}
                        height={500}
                        alt="profile image"
                    />
                </div>
            )}
            {!defaultImg && isImage && (
                <div className="w-24 h-24 overflow-hidden rounded-2xl bg-zinc-200 relative z-1 shadow-lg">
                    <Image
                        className="size-full"
                        src={isImage}
                        width={500}
                        height={500}
                        alt="profile image"
                    />
                </div>
            )}
            {!defaultImg && !isImage && (
                <div className="w-24 h-24 overflow-hidden rounded-2xl bg-zinc-200 relative z-1 flex justify-center items-center">
                    <p className="text-zinc-400 text-xs text-center font-semibold">
                        Choose <br /> Photo
                    </p>
                </div>
            )}

            <label className="absolute bottom-0 right-0 z-1" htmlFor="file">
                <span className="p-1 bg-blue-400 text-white w-6 h-6 cursor-pointer hover:bg-blue-500 flex justify-center items-center rounded-2xl">
                    <TbPhotoEdit />
                </span>
                <input
                    id="file"
                    type="file"
                    hidden
                    onChange={handleImageChange}
                    accept=".png, .jpg, .jpeg, .svg"
                />
            </label>
            {isImage && (
                <span
                    className="absolute bottom-0 left-0 p-1 bg-red-300 text-red-800 w-6 h-6 cursor-pointer hover:bg-red-500 hover:text-white flex justify-center items-center rounded-2xl z-1"
                    onClick={removeImg}
                >
                    <IoIosClose />
                </span>
            )}

            {!isImage && (
                <select
                    className="bg-blue-200 text-sm pt-4 pb-1 px-2 absolute w-full border border-zinc-200 rounded-xl -translate-y-8 z-0 transition-all group-hover:-translate-y-4 group-hover:bg-zinc-50"
                    onChange={defaultImgChanger}
                >
                    <option value="-1">Select ...</option>
                    <option value="/images/user/user-default-men.svg">
                        Men
                    </option>
                    <option value="/images/user/user-default-women.svg">
                        Women
                    </option>
                </select>
            )}
        </div>
    );
}
