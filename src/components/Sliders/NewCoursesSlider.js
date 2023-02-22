import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination,Grid } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";


import Course from '../Cards/Course';
import { useEffect, useState } from 'react';
const NewCoursesSlider = ({data}) =>{

    return(
        <Swiper
            className='items-center'
            loopFillGroupWithBlank= {true}
            
            breakpoints={{
            640: {
                slidesPerView: 1,
                slidesPerGroup:1,

            },
            
            1024: {
                slidesPerView: 3,
                slidesPerGroup:6,
                spaceBetween:21

            },
            768: {
                slidesPerView: 2,
                slidesPerGroup:4,
                spaceBetween:10,
                grid:{
                    rows:2,
                    fill:"row"
                }
            },

            }}
            modules={[Navigation, Pagination,Grid]}
            navigation
            pagination={{
                clickable: true,                
            }}
            slidesPerView={1}      
        >    
        {data?.map((item)=>(
            <SwiperSlide className='flex justify-center md:mb-[20px]'>
                <Course data={item}/> 
            </SwiperSlide>   
        ))}                
        </Swiper>

    )
}

export default NewCoursesSlider