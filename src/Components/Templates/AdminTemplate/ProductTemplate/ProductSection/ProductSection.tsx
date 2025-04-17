import ProductSlider from '@/Components/Modules/Sliders/ProductSlider/ProductSlider';
import React from 'react';

export default function ProductSection() {
    return (
        <section className="box mt-8">
            <div className="p-4 border-b border-zinc-200">
                <h3 className="font-semibold text-xl text-zinc-600">
                    Product Detail
                </h3>
            </div>
            <div className="p-6">
                <div className="grid lg:grid-cols-7 gap-8">
                    <div className="lg:col-span-2">
                        <ProductSlider />
                    </div>
                    <div>sfd</div>
                </div>
            </div>
        </section>
    );
}
