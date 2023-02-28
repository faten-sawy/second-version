
import {BsPerson} from "react-icons/bs"
import {TbCertificate} from "react-icons/tb"
import LapWithCertificate from "public/assets/Icons/ICONS-07.png"
import lap from "public/assets/Icons/ICONS-11.png"
import lapVideios from "public/assets/Icons/ICONS-13.png"
import lapWithBook from "public/assets/Icons/ICONS-19.png"
import Image from "next/image"

const Offers = () => {
    return(
        <div className="text-center m-4 flex flex-col justify-center items-center ">
            <div className="w-[30.7vw] max-xl:w-[70vw]">
                <h3 className="font-[ar-bold] text-[#142431] max-lg:text-[24.79px] max-lg:mb-[26.2px] text-[37px] mb-[39.16px]">منصتنا تقدم لك</h3>
                <p className=" font-[ar-regular] max-lg:text-[16.75px] text-[25px]">مهمتنا هي تقديم أفضل محتوى تعليمي عربي مطور باستمرار
                    ، يساعدك على بناء شخصيتك وتحقيق أحلامك المستقبلية</p>
            </div>
            
            <div className="flex justify-between w-[70.9vw] items-center m-8 max-[378px]:m-4  max-sm:flex-wrap mt-[75.84px]">
                <div className="flex flex-col items-center max-[383px]:w-[100%] max-sm:w-[49%] max-[378px]:w-[49%] mb-4" >
                    <span className="text-center flex justify-center items-center max-lg:w-[108px] max-lg:h-[108px] w-[144px] h-[144px] bg-blue-100 rounded-[200px] ">
                        <Image alt="icon" src={LapWithCertificate} className="max-lg:w-[45px] max-lg:h-[45px] w-[60px] h-[60px]"/>
                    </span>
                    <p className="mt-4 text-[#142431] font-[ar-bold] 2xl:text-[24px]">دورات تدريبيه</p>
                </div>
                <div className="flex flex-col items-center max-[383px]:w-[100%] max-sm:w-[49%] max-[378px]:w-[49%] mb-4" >
                    <span className="text-center flex justify-center items-center max-lg:w-[108px] max-lg:h-[108px] w-[144px] h-[144px] bg-blue-100 rounded-[200px] ">
                        <Image alt="icon" src={lap} className="max-lg:w-[45px] max-lg:h-[45px] w-[60px] h-[60px]"/>
                    </span>
                    <p className="mt-4 text-[#142431] font-[ar-bold] 2xl:text-[24px]">مسارات</p>
                </div>
                <div className="flex flex-col items-center max-[383px]:w-[100%] max-sm:w-[49%] max-[378px]:w-[49%] mb-4" >
                    <span className="text-center flex justify-center items-center max-lg:w-[108px] max-lg:h-[108px] w-[144px] h-[144px] bg-blue-100 rounded-[200px] ">
                        <Image alt="icon" src={lapVideios} className="max-lg:w-[45px] max-lg:h-[45px] w-[60px] h-[60px]"/>
                    </span>
                    <p className="mt-4 text-[#142431] font-[ar-bold] 2xl:text-[24px]">معرفة مجانية</p>
                </div>
                <div className="flex flex-col items-center max-[383px]:w-[100%] max-sm:w-[49%]  max-[378px]:w-[49%] mb-4" >
                    <span className="text-center flex justify-center items-center max-lg:w-[108px] max-lg:h-[108px] w-[144px] h-[144px] bg-blue-100 rounded-[200px] ">
                        <Image alt="icon" src={lapWithBook} className=" max-lg:w-[45px] max-lg:h-[45px] w-[60px] h-[60px]"/>
                    </span>
                    <p className="mt-4 text-[#142431] font-[ar-bold] 2xl:text-[24px]">شهادات</p>
                </div>
            </div>
        </div>
    )
}

export default Offers