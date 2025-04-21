import React from 'react';
import ProductPhotosBox from './ProductPhotosBox/ProductPhotosBox';
import ProductForm from './ProductForm/ProductForm';

export default function NewProductSection() {
    return (
        <section className="box mt-8">
            <div className="p-4 border-b border-zinc-200">
                <h3 className="font-semibold text-xl text-zinc-600">
                    Add Product
                </h3>
            </div>
            <div className="py-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
                    <div className="lg:col-span-2">
                        <ProductPhotosBox />
                    </div>
                    <div className="lg:col-span-5">
                        <ProductForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
