"use client"
import elicoptero from "../../../public/girafa.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, } from 'swiper/modules';
import Image from 'next/image';


export default function CarrosselMobile() {
    return (
        <div className="pb-10 flex justify-center items-center w-screen">

            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination]}
                className="mySwiper h-[450px] w-96 absolute top-0"
                style={{
                    // Adicione o estilo inline para alterar a cor da bolinha de paginação
                    "--swiper-pagination-color": "#f5f5f5",
                }}
            >

                <SwiperSlide className='!flex !justify-center !items-center'>
                    <div className="flex flex-col justify-center items-center">
                        <Image src={elicoptero} className="w-[90%] drop-shadow-dark" />
                        <button className="bg-white rounded p-2 mt-2 w-24 drop-shadow-dark">
                            Comprar
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='!flex !justify-center !items-center'>
                    <div className="flex flex-col justify-center items-center">
                        <Image src={elicoptero} className="w-[90%] drop-shadow-dark" />
                        <button className="bg-white rounded p-2 mt-2 w-24 drop-shadow-dark font-bold text-blue-500">
                            Comprar
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='!flex !justify-center !items-center'>
                    <div className="flex flex-col justify-center items-center">
                        <Image src={elicoptero} className="w-[90%] drop-shadow-dark" />
                        <button className="bg-white rounded p-2 mt-2 w-24 drop-shadow-dark font-bold text-blue-500">
                            Comprar
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}