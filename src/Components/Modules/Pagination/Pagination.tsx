import React from 'react';
import PrvBtn from './PrvBtn/PrvBtn';
import NextBtn from './NextBtn/NextBtn';
import NumberPage from './NumberPage/NumberPage';

export default function Pagination() {
    return (
        <div>
            <PrvBtn />
            <NumberPage currentPage='1' allPage='12'/>
            <NextBtn />
        </div>
    );
}
