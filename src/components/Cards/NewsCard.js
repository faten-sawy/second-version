import { URL } from "public/assets/utils/environment"
import styles from "../../styles/Home.module.css"
import sliderDefault from "../../../public/assets/Images/Slider.jpg"
import t from "../../../public/assets/Images/instractor.jpg"

import Image from "next/image"

const NewsCard = ({data}) =>{
    const bgStyle = {
        background :( data ?` url(${URL.IMAGE_PATH + data.photourl})`: `url(${URL.IMAGE_PATH +'/posternews/Slider.jpg' })`) ,
        backgroundRepeat:"no-repeat",
        backgroundSize:"100% 100%"
    }
    
    return(
        <div className={`max-2xl:px-8 relative max-[444px]:mb-16 ${styles.test_wraper}  bg-no-repeat relative w-[100%] h-[100%]`}  style={bgStyle} >    
            <div className="overlay max-sm:w-[100%] absolute"></div>
            <div className={`w-[50%] max-sm:w-[100%] relative max-md:top-[100px] md:w-[60%] md:top-[88.695px] lg:top-[118.26px] 2xl:top-[242px]`}>
                <h1 className="text-[42px] text-white max-[320px]:text-[30px] md:text-[36.18px] md:ml-[16.305px] md:mb-[15.5775px] lg:text-[48.24px] lg:ml-[21.74px] lg:mb-[20.77px] 2xl:text-[72px] 2xl:ml-[122px] font-[en-bold] 2xl:mb-[31px]">Build Skills With Experts
                Anytime Anywhere</h1>
                <p className="text-white max-[320px]:text-[12px] md:text-[16.47px] md:ml-[21.74px] 2xl:text-[22px] font-[en-regular] 2xl:ml-[145px]">Welcome To Plan B Company For Training And Development. You Are Now On The Right Track To Consciously Engage In Personal And Professional Life</p>
                <button className={`${styles.list_button} mt-4 h-[44px] w-[160px] text-white rounded-xl md:ml-[21.74px] md:text-[12.8px]  2xl:text-[24px] font-[en-meduim] 2xl:h-[78px] 2xl:w-[280px] 2xl:mt-[61px] 2xl:ml-[113px]`}>
                    START LEARNING NOW
                </button>
            </div>        
        </div>
        
    )
}

export default NewsCard