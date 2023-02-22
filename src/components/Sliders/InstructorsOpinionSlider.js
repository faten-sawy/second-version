import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation,Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import Image from 'next/image';
import { URL } from 'public/assets/utils/environment';
import f from "../../../public/assets/Images/ScreanInstractorOpinion/auth1.png"


const InstructorsOpinionSlider = ({data}) =>{
    return(
        <Swiper
            className='items-center'
            loopFillGroupWithBlank= {true}           
            breakpoints={{
            640: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween:21,

            },
            768: {
                slidesPerView: 1,

            },
            }}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{
                clickable: true,                
            }}
            slidesPerView={1}      
        >    
        {data?.map((item)=>(
            <SwiperSlide className='flex justify-center md:mb-[20px] lg:mb-[40.28px] 2xl:mb-[40px]'>
                <div className=''>
                    <Image className='5xl:w-[500px] 5xl:h-[420px] ' width={500} height={420}  src={`/assets/Images/ScreanInstractorOpinion/auth1.png`} alt="opinion"/> 
                </div>
            </SwiperSlide>   
        ))}            
                
        </Swiper>
        
      
    )
}
export default InstructorsOpinionSlider