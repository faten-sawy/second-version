
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Autoplay,Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NewsCard from '../Cards/NewsCard';
import styles from "../../styles/Home.module.css"
const NewsSlider = ({data}) =>{
    return(
        <div className='relative h-[100%]'>
            <Swiper
            className={`items-center h-[100%] news ${styles.news_slider_test}`}     
            modules={[Navigation,Autoplay,Pagination]}
            loop={true}
            navigation
            pagination
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
          
            spaceBetween={5}
            slidesPerView={1} 
        >
            {data?.map((item)=>(
            <SwiperSlide className='h-[100%] '>
                <NewsCard data={item}/>
            </SwiperSlide>
                
        ))}
            </Swiper>
            <div className='diagnol'><p>.</p></div>

        </div>
       

    )
}

export default NewsSlider