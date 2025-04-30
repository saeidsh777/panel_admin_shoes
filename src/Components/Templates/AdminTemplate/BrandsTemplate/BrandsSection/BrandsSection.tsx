'use client';
import SearchInput from '@/Components/Modules/Inputs/SearchInput/SearchInput';
import React from 'react';
import BrandItem from '../BrandItem/BrandItem';
import { useAppDispatch } from '@/redux/reduxHooks';
import { showModal } from '@/redux/slices/showModal';

export default function BrandsSection() {
    const dispatch = useAppDispatch();
    return (
        <section className="box mt-8">
            <div className="p-4 border-b border-zinc-200 flex justify-between items-center">
                <h3 className="font-semibold text-xl text-zinc-600">
                    All Brands
                </h3>
                <button
                    type="submit"
                    className="btn_global"
                    onClick={() => {
                        dispatch(showModal('NewBrandModal'));
                    }}
                >
                    Add Brand
                </button>
            </div>
            <div className="p-6">
                <SearchInput />
                <div className="mt-6">
                    <div className="grid grid-cols-8 gap-2">
                        <BrandItem
                            src="/images/brand/adidas-logo.svg"
                            name="Adidas"
                        />
                        <BrandItem
                            src="/images/brand/asics-logo.svg"
                            name="Asics"
                        />
                        <BrandItem
                            src="/images/brand/reebok-logo.svg"
                            name="Reebok"
                        />
                        <BrandItem
                            src="/images/brand/New-Balance-Logo.svg"
                            name="New Balance"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
