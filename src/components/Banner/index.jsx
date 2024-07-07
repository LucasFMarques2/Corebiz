import desktopBanner from '../../assets/desktopBanner/banner.svg';
import desktopBanner2 from '../../assets/desktopBanner/banner2.svg';
import mobileBanner from '../../assets/mobileBanner/banner.svg'

import styles from './Banner.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import{useState, useEffect} from 'react'

export function Banner() {


    const [slider, setSlider] = useState([]);

    useEffect(()=>{
        function handleSlider(){
            if(window.innerWidth < 720){
                setSlider([
                    { id: '1', img: mobileBanner },
                    { id: '2', img: mobileBanner },
                    { id: '3', img: mobileBanner },
                    { id: '4', img: mobileBanner },
                ])
            }else{
                setSlider([
                    { id: '1', img: desktopBanner },
                    { id: '2', img: desktopBanner2 },
                    { id: '3', img: desktopBanner },
                    { id: '4', img: desktopBanner2 },
                ])
            }
        }

        handleSlider()
        window.addEventListener("resize", handleSlider)

        return()=>{
            window.removeEventListener("resize", handleSlider)
        }

    }, [])

    return (
        <div className={styles.banner}>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                style={{
                    "--swiper-pagination-color": "var(--red-300)",
                    "--swiper-pagination-bullet-inactive-color": "var(--gray-400)",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                  }}
            >
                {slider.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img src={image.img} alt="Slider" className={styles.slideItem} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
