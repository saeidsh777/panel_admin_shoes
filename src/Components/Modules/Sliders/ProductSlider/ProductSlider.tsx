'use client';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PhotoSlide from './PhotoSlide/PhotoSlide';

export default function ProductSlider() {
    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);
    const sliderRef1 = useRef<Slider | null>(null);
    const sliderRef2 = useRef<Slider | null>(null);

    useEffect(() => {
        if (sliderRef1.current && sliderRef2.current) {
            setNav1(sliderRef1.current);
            setNav2(sliderRef2.current);
        }
    }, []);

    return (
        <div className="slider-container">
            <Slider
                asNavFor={nav2}
                ref={(slider) => {
                    if (slider) {
                        sliderRef1.current = slider;
                    }
                }}
                arrows={false}
                className="mb-4"
            >
                <PhotoSlide image="/images/products/p1.jpg" />
                <PhotoSlide image="/images/products/p2.jpg" />
                <PhotoSlide image="/images/products/p3.jpg" />
                <PhotoSlide image="/images/products/p1.jpg" />
            </Slider>
            <Slider
                asNavFor={nav1}
                ref={(slider) => {
                    if (slider) {
                        sliderRef2.current = slider;
                    }
                }}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
                className="gap-4 small-slider"
            >
                <div className="px-1">
                    <PhotoSlide image="/images/products/p1.jpg" />
                </div>
                <div className="px-1">
                    <PhotoSlide image="/images/products/p2.jpg" />
                </div>
                <div className="px-1">
                    <PhotoSlide image="/images/products/p3.jpg" />
                </div>
                <div className="px-1">
                    <PhotoSlide image="/images/products/p1.jpg" />
                </div>
            </Slider>
        </div>
    );
}
