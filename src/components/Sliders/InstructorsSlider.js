import { Swiper, SwiperSlide } from 'swiper/react';
import  { Grid, Navigation,Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import InstractorCard from '../Cards/InstructorsCard';
const InstructorSlider = ({data}) =>{
    console.log(data,"FROM INSTRUCTOR SLIDER")
    return(
        <Swiper
            className='items-center instractor-sliders'
            breakpoints={{           
            640: {
                slidesPerView: 2,
                slidesPerGroup:4,
                spaceBetween:20,
                grid:{
                    rows:2,
                    fill:"row"
                }
            },
            280:{
                slidesPerView: 2,
                slidesPerGroup:4,
                spaceBetween:20,
                grid:{
                    rows:2,
                    fill:"row"
                }

            },
            
            1024: {
                slidesPerView: 6,
                slidesPerGroup:6
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup:3
            },

            }}
            modules={[Navigation, Pagination,Grid]}
            navigation
            pagination={{
                clickable: true,
             }}
             spaceBetween={20}
            slidesPerView={1}         
        >
            {data?.map((item)=>(
            <SwiperSlide className='mb-8'>
                <InstractorCard data={item}/> 
            </SwiperSlide>
                
        ))}
      </Swiper>

    )
}

export default InstructorSlider