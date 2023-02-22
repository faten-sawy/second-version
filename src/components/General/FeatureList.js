import Image from "next/image"
import expert from "public/assets/Icons/ICONS-14.png"
import lifeTime from "public/assets/Icons/ICONS-11.png"
import group from "public/assets/Icons/ICONS-17.png"
import platform from "public/assets/Icons/ICONS-12.png"

const FeatureList = () =>{
    return(
        <ul className="flex flex-wrap mt-8">
            <li className="flex items-center w-[50%] max-lg:w-[100%] max-lg:mb-[22.5px] lg:mb-[30px] 2xl:mb-[45px] lg:text-[16px] 2xl:text-[24px] font-[en-regular] ">
                <Image className="w-[35px] mr-3 h-[35px] lg:w-[38.19px] lg:h-[38.19px] 2xl:w-[57px] 2xl:h-[57px] 2xl:mr-[16px]" src={expert} alt="icon"/>
                Expert Trainers
            </li>
            <li className="flex items-center w-[50%] max-lg:w-[100%] text-[#142431] max-lg:mb-[22.5px] lg:mb-[30px] 2xl:mb-[45px] lg:text-[16px] 2xl:text-[24px] font-[en-regular] ">
                <Image className="w-[35px] mr-3 h-[35px] lg:w-[38.19px] lg:h-[38.19px] 2xl:w-[57px] 2xl:h-[57px] 2xl:mr-[16px]" src={lifeTime} alt="icon"/>
                Lifetime Access
            </li>
            <li className="flex items-center w-[50%] max-lg:w-[100%] text-[#142431] max-lg:mb-[22.5px] lg:mb-[30px] 2xl:mb-[45px] lg:text-[16px] 2xl:text-[24px] font-[en-regular] ">
                <Image className="w-[35px] mr-3 h-[35px] lg:w-[38.19px] lg:h-[38.19px] 2xl:w-[57px] 2xl:h-[57px] 2xl:mr-[16px]" src={group} alt="icon"/>
                Open And Closed Learning
            </li>
            <li className="flex items-center w-[50%] max-lg:w-[100%] text-[#142431] max-lg:mb-[22.5px] lg:mb-[30px] 2xl:mb-[45px] lg:text-[16px] 2xl:text-[24px] font-[en-regular] ">
                <Image className="w-[35px] mr-3 h-[35px] lg:w-[38.19px] lg:h-[38.19px] 2xl:w-[57px] 2xl:h-[57px] 2xl:mr-[16px]" src={platform} alt="icon"/>
                Platform Self-Development
            </li>
        </ul>

    )
}
export default FeatureList