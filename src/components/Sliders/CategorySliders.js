import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation,Pagination,Grid } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import CategoryCard from "../Cards/CategoryCard";

const CategorySlider = ({data}) =>{
    return(
        <Swiper
            className='items-center category-card-container'
            breakpoints={{        
            280: {
                slidesPerView: 2,
                slidesPerGroup:4,
                spaceBetween:20,
                grid:{
                    rows:2,
                    fill:"row"
                }
            },
            
            1024: {
                slidesPerView: 3,
                slidesPerGroup:6,
                grid:{
                    rows:2,
                    fill:"row"
                }
            },
            1280:{
                
                slidesPerView: 3,
                slidesPerGroup:6,
                spaceBetween:20,
                grid:{
                    rows:2,
                    fill:"row"
                }
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup:6,
                spaceBetween:20,
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
             spaceBetween={20}
            slidesPerView={1}      
        >
           {/**lg:w-[251.25px] lg:h-[166.16px] lg:mr-[22.78px] 2xl:mr-[34px] 2xl:w-[375px] 2xl:h-[248px] */}
          
                {data?.map((item)=>(
                <SwiperSlide className='' >
                    <CategoryCard data={item}/> 
                </SwiperSlide>
                ))}
      </Swiper>

    )
}

export default CategorySlider