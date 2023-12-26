"use client"
import elicoptero from "/public/danila.jpg";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

export default function CarrosselCompra({ primeira, segunda, terceira, title }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='pr-5'>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 w-96 h-full styles.swiper mb-5"
                style={{
                    "--swiper-pagination-color": "#28437A",
                }}
            >
                <SwiperSlide className='text-center text-xl bg-white flex justify-center items-center round'>
                    <Image src={elicoptero} alt={title} className='w-full h-full object-cover '/>
                </SwiperSlide>
                <SwiperSlide className='text-center text-xl flex justify-center items-center'>
                    <Image src={elicoptero} alt={title} className='w-full h-full object-cover'/>
                </SwiperSlide >
                <SwiperSlide className='text-center text-xl flex justify-center items-center'>
                    <Image src={elicoptero} alt={title} className='w-full h-full object-cover'/>
                </SwiperSlide>
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper w-full h-full"
            >
                <SwiperSlide className='text-center text-xl flex justify-center items-center'>
                    <Image src={elicoptero} alt={title} className='w-full h-full object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='text-center text-xl flex justify-center items-center'>
                    <Image src={elicoptero} alt={title} className='w-full h-full object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='text-center text-xl flex justify-center items-center'>
                    <Image src={elicoptero} alt={title} className='w-full h-full object-cover'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
