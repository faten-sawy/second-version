import Image from "next/image"
import { useState } from "react"
import styles from "../../styles/Aboutus.module.css"

const OurVision = ({data}) =>{
    const {icon:Icon,text,desc} = data

    return(
        <div className={`bg-container lg:pt-3 flex flex-col items-center w-full h-full shadow relative bg-white `}>
            <div className={`rounded-[200px] icon-container bg-[#E4F1F3] min-h-[107px] min-w-[107px] w-[26%] h-[26%] flex justify-center items-center max-2xl:mt-[18.62px]  5xl:mt-[54px] 2xl:mt-[43.2px]`} >
               <Icon className="w-[48.3%] h-[48.3%]"/>
            </div>  
            <h2 className={`vision-text text-[14px]  max-lg:mt-[11.625px] font-[ar-bold] text-[#142431] max-lg:text-[14.8px] lg:mt-[15.5px] lg:mb-[19.6px] 2xl:text-[19.2px] 2xl:mt-[23.2px] 2xl:mb-[29.2px] 5xl:text-[26px] 5xl:mt-[29px] 5xl:mb-[36.5px]`}>{text}</h2>
            <p className={`vision-desc text-center leading-5 text-[16px] font-[ar-meduim]  text-[#2B2E30]  max-2xl:p-4 lg:pt-0 max-lg:text-[14px]  5xl:text-[16px] 2xl:px-[41.6px] 2xl:text-[12px]`}>{desc}</p>
        </div>     
    )
}
export default OurVision