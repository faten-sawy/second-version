import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation,Pagination,Grid } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import Employee from '../Cards/Employee';

const TeamWork = ({data}) =>{
    return(
        <Swiper
            className='items-center employee-container'
            loopFillGroupWithBlank= {true}         
            breakpoints={{
            640: {
                slidesPerView: 1,
                slidesPerGroup:2,
                grid:{
                    rows:2,
                    fill:"row"
                }
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup:4,
                spaceBetween:21,
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
            // spaceBetween={10}
            slidesPerView={1}      
        >    
        {data?.map((item)=>(
            <SwiperSlide className='flex justify-center md:mb-[20px] lg:mb-[40.28px] 2xl:mb-[40px]'>
                <Employee data={item}/> 
            </SwiperSlide>   
        ))}            
     </Swiper>
   
    )
}
export default TeamWork