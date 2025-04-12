import React from 'react';

export default function NumberPage({
    currentPage,
    allPage,
}: {
    currentPage: string;
    allPage: string;
}) {
    return (
        <button className="bg-zinc-100 py-1 px-3 border border-zinc-200 text-zinc-500 text-sm">
            {currentPage} / {allPage}
        </button>
    );
}
