import Image from "next/image"
import expert from "public/assets/Icons/ICONS-14.png"
import lifeTime from "public/assets/Icons/ICONS-11.png"
import group from "public/assets/Icons/ICONS-17.png"
import platform from "public/assets/Icons/ICONS-12.png"

const FeatureList = ({lang}) =>{
    return(
        <ul className="flex flex-wrap mt-8">
            <li className={`flex  ${lang === 'ar' ? 'flex-row-reverse':'flex-row'} items-center w-[50%] max-lg:w-[100%] max-lg:mb-[22.5px] lg:mb-[30px] 2xl:mb-[45px] lg:text-[16px] 2xl:text-[24px] font-[${lang}-regular]`}>
          <Image className={`w-[35px] mr-3 h-[35px] lg:w-[38.19px] lg:h-[38.19px] 2xl:w-[57px] 2xl:h-[57px] ${lang ==='ar' ? '2xl:ml-[16px]' :'2xl:mr-[16px]'} `} src={expert} alt="icon"/>
                {lang === 'ar' ? "مدربين خبراء" : "Expert Trainers"}
            </li>
            <li className={`flex  ${lang === 'ar' ? 'flex-row-reverse':'flex-row'} items-center w-[50%] max-lg:w-[100%] text-[#142431] max-lg:mb-[22.5px] lg:mb-[30px] 2xl:mb-[45px] lg:text-[16px] 2xl:text-[24px] font-[${lang}-regular]`}>
                <Image className={`w-[35px] mr-3 h-[35px] lg:w-[38.19px] lg:h-[38.19px] 2xl:w-[57px] 2xl:h-[57px] ${lang==='ar' ? '2xl:ml-[16px]' :'2xl:mr-[16px]'}`} src={lifeTime} alt="icon"/>
               {lang=== 'ar' ? "وصول مدي الحياة" : "Lifetime Access"}
            </li>
            <li className={`flex  ${lang === 'ar' ? 'flex-row-reverse':'flex-row'}  items-center w-[50%] max-lg:w-[100%] text-[#142431] max-lg:mb-[22.5px] lg:mb-[30px] 2xl:mb-[45px] lg:text-[16px] 2xl:text-[24px] font-[${lang}-regular]`}>
                <Image className={`w-[35px] mr-3 h-[35px] lg:w-[38.19px] lg:h-[38.19px] 2xl:w-[57px] 2xl:h-[57px] ${lang==='ar' ? '2xl:ml-[16px]' :'2xl:mr-[16px]'}`} src={group} alt="icon"/>
               {lang === 'ar' ? 'تعليم مفتوح ومغلق': "Open And Closed Learning"}
            </li>
            <li className={`flex  ${lang === 'ar' ? 'flex-row-reverse':'flex-row'} items-center w-[50%] max-lg:w-[100%] text-[#142431] max-lg:mb-[22.5px] lg:mb-[30px] 2xl:mb-[45px] lg:text-[16px] 2xl:text-[24px] font-[${lang}-regular]`}>
                <Image className={`w-[35px] mr-3 h-[35px] lg:w-[38.19px] lg:h-[38.19px] 2xl:w-[57px] 2xl:h-[57px] ${lang==='ar' ? '2xl:ml-[16px]' :'2xl:mr-[16px]'}`} src={platform} alt="icon"/>
                {lang === 'ar' ? 'تطوير ذاتي للمنصة': "Platform Self-Development"}
            </li>
        </ul>

    )
}
export default FeatureList