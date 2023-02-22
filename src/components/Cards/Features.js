import Image from "next/image"

import {TbCertificate} from "react-icons/tb"
const FeatureCard = ({data}) =>{
    const {desc,text,icon} = data

    return(
        <div className="max-5xl:pt-5 lg:pt-3 flex flex-col items-center h-[100%] shadow relative  mx-4 bg-white rounded-xl">
        <div className="h-[40px] w-[40px] flex justify-center items-center lg:h-[66.25px] lg:w-[83.74px] lg:mt-[18.62px]  5xl:h-[125px] 5xl:w-[158px] 5xl:mt-[54px] 2xl:w-[126.4px] 2xl:h-[100px] 2xl:mt-[43.2px]" >
                <Image src={icon} alt="icon" className="5xl:h-[70px] 5xl:w-[50px] lg:h-[37.1px] lg:w-[26.5px] 2xl:h-[56px] 2xl:w-[40px]" />
            </div>  
            <h2 className="text-[14px] max-lg:mt-[11.625px] font-[en-bold] text-[#142431] lg:text-[12.8px] lg:mt-[15.5px] lg:mb-[19.6px] 2xl:text-[19.2px] 2xl:mt-[23.2px] 2xl:mb-[29.2px] 5xl:text-[24px] 5xl:mt-[29px] 5xl:mb-[36.5px]">{text}</h2>
            <p className="text-center text-[12px] text-[#606065] max-2xl:p-4 lg:pt-0 lg:text-[12px]  5xl:text-[15px] font-[en-regular] 5xl:px-[52px] leading-[18.15px] 2xl:px-[41.6px] 2xl:text-[12px]">{desc}</p>
        </div>      
    )
}
export default FeatureCard