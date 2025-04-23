'use client';
import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function PrintBtn() {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    useEffect(() => {
        contentRef.current = document.querySelector('#print-container');
    }, []);

    return (
        <button className="btn_global" onClick={() => reactToPrintFn()}>
            Print
        </button>
    );
}
