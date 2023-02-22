import {BsArrowRight} from 'react-icons/bs'
import bg from "public/assets/Images/general/static.png"
import { URL } from 'public/assets/utils/environment'
import hovering from "public/assets/Images/general/Rectangle 52.png"
import Image from 'next/image'
import styles from "../../styles/Home.module.css"

const StaticSlider =()=>{
    return (
        <div className={`max-lg:min-h-[550px] h-auto flex flex-col items-center  static_slider md:h-[401.49px] lg:h-[535.33px] 2xl:h-[799px]`} >
            <div className={`h-min-[200px] h-auto relative max-lg:top-20 flex flex-col items-center lg:mt-[104.72px] 2xl:mt-[216px]`} >
                <h2 className="text-white text-[40px] max-md:text-[35px] max-md:mx-8 max-lg:my-5 text-center max-sm:text-[30px]  lg:mb-[40.2px] 2xl:text-[60px] font-[en-bold] 2xl:mb-[60px]">A Leraning Experrince Arround The World</h2>
                <p className="text-white max-2xl:my-5 w-[50%] text-[16px]  text-center max-lg:w-[70%] max-sm:w-[90%]  lg:mb-[40.2px] 2xl:text-[20px] font-[en-regular] 2xl:mb-[60px]"> 
                Motivating and enabling you to achieve your professional and personal goals in the fieldlearning and development by providing you with the knowledge and experience of senior mentors and coaches                </p>
                <div className='flex my-4 flex-wrap max-[430px]:flex-col items-center justify-center '>
                    <button className="h-[54px] w-[180px] text-[16px] mb-4 mx-4 border border-white bg-none px-2 rounded-lg text-white flex items-center justify-center lg:text-[16.74px] lg:h-[54.94px] lg:w-[207.7px]  2xl:w-[310px] 2xl:h-[82px] 2xl:text-[22px] font-[en-regular]">
                        Reister as student <BsArrowRight className='ml-2'/>
                    </button>
                    <button className="h-[54px] w-[180px] text-[16px] mb-4 mx-4 px-2 rounded-lg text-white bg-[#FEB000] flex items-center justify-center  lg:text-[16.74px] lg:h-[54.94px] lg:w-[207.7px] 2xl:w-[310px] 2xl:h-[82px] 2xl:text-[22px] font-[en-regular]">
                        Register as trainer <BsArrowRight className='ml-2'/>
                    </button>
                </div>
            </div>
          
        </div>
       

    )
}

export default StaticSlider