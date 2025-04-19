import React from 'react';
import ProductsTableRow from './ProductsTableRow/ProductsTableRow';

export interface ProductType {
    _id: string;
    slug: string;
    productName: string;
    brand: {
        name: string;
        slug: string;
        brandID: string;
    };
    model: {
        id: string;
        name: string;
    };
    sizes: {
        id: string;
        size: {
            number: number;
            stock: number;
            colors: {
                id: string;
                colorCode: string;
                quantity: number;
                price: number;
            }[];
        };
    }[];
    colors: {
        id: string;
        colorCode: string;
        stock: number;
        bg: string;
    }[];
    image: string;
    priceRenge: string;
}

const allProducts: ProductType[] = [
    {
        _id: 'fkmd351df516df50',
        slug: 'adidas-k512',
        productName: 'Adidas K512',
        brand: {
            name: 'Adidas',
            slug: 'adidas',
            brandID: 'kjksd5s4ds',
        },
        model: {
            id: 'jkjrubew76348dbu347',
            name: 'K512',
        },
        sizes: [
            {
                id: 'klskd5s45d5s4fbg',
                size: {
                    number: 42,
                    stock: 6,
                    colors: [
                        {
                            id: 'jbkr83ub898zm84',
                            colorCode: 'red',
                            quantity: 5,
                            price: 250,
                        },
                        {
                            id: 'jbkr83ub898zsdm84',
                            colorCode: 'black',
                            quantity: 1,
                            price: 320,
                        },
                    ],
                },
            },
            {
                id: 'klskd5s4f5d5s4fbg',
                size: {
                    number: 39,
                    stock: 12,
                    colors: [
                        {
                            id: 'jbkr83uyb898zm84',
                            colorCode: 'red',
                            quantity: 5,
                            price: 250,
                        },
                        {
                            id: 'jbkr834frub898zsdm84',
                            colorCode: 'black',
                            quantity: 7,
                            price: 320,
                        },
                    ],
                },
            },
        ],
        colors: [
            {
                id: 'hd839cn',
                colorCode: 'red',
                stock: 10,
                bg: 'bg-[red]',
            },
            {
                id: 'hd8f39cn',
                colorCode: 'black',
                stock: 8,
                bg: 'bg-[black]',
            },
        ],
        image: '/images/products/p1.jpg',
        priceRenge: '$625 - $750',
    },
];

export default function ProductsTable() {
    return (
        <table className="w-full whitespace-nowrap text-xs md:text-base">
            <thead className="sticky top-0 left-0 w-full bg-white outline-1 outline-zinc-200">
                <tr className="text-zinc-400 pb-4 text-left [&>th]:pe-8">
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Sizes</th>
                    <th>Colors</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody className="text-zinc-500 ">
                {allProducts.map((product) => (
                    <ProductsTableRow key={product._id} product={product} />
                ))}
            </tbody>
        </table>
    );
}
