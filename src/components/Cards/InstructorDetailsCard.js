import Image from "next/image"
import {BsPerson,BsTv,BsEye,BsShare} from "react-icons/bs"
import {FaLinkedinIn,FaTwitter,FaFacebookF} from "react-icons/fa"
import styles from "../../styles/InstructorDetails.module.css"

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
  } from 'next-share';

export default function InstructorDetailsCard  ({instructor}){
    const {photo,name,jopTitle,numperOfViews
        ,numberOfStudent,about,numberOfCourses,courses} = instructor
    console.log(courses)
    return (
        <div className="flex flex-col items-end h-auto">
            <div className={`flex max-md:pb-[16px] flex-row-reverse ${styles.instructor_top_part} w-full text-right max-md:flex-col md:pt-[31.8px] md:pb-[39.195px] lg:pt-[42.4px]  lg:pb-[52.26px] 2xl:pb-[78px] 2xl:pt-[80px] pr-[7vw] md:min-h-[178px] lg:min-h-[237.44px] 2xl:h-[448px]`}>
                <div className="max-md:flex max-md:justify-center max-md:py-4 max-md:items-center">
                    <div className="hidden max-md:block mr-8">
                        <h2 className="2xl:text-[36px] md:text-[19px] text-white font-[ar-bold] mb-[18px] ">{name}</h2>
                        <h3 className="text-white md:text-[14.72px] 2xl:text-[24px] font-[ar-meduim] ">رئيس مجلس إدارة ومؤسس ريل أكاديمي{/*jopTitle*/}</h3>
                    </div>
                    <Image src={photo} width={312} height={312} className=" max-md:h-[89.85px] max-md:w-[89.85px] max-md:w rounded-[200px]  h-[250px] w-[250px]   relative  md:rounded-[100%] md:h-[166.25px] md:w-[166.25px] lg:h-[195.36px] lg:w-[195.36px] 5xl:w-[312px] 5xl:h-[312px] "/>
                </div>
                <div className="max-md:m-0 mr-[5vw]">
                    <div className="max-md:hidden block">
                        <h2 className="2xl:text-[36px] md:text-[19px] text-white font-[ar-bold] mb-[28px] ">{name}</h2>
                        <h3 className="text-white md:text-[14.72px] 2xl:text-[24px] font-[ar-meduim] ">رئيس مجلس إدارة ومؤسس ريل أكاديمي{/*jopTitle*/}</h3>
                    </div>
                   
                    <div className="flex max-[438px]:flex-col max-[438px]:justify-start flex-row-reverse max-md:mb-[16px] md:mt-[22.4px] md:mb-[27.4px] lg:mt-[29.945px] 2xl:mt-[56.5px] lg:mb-[36.57px] 2xl:mb-[69px] max-md:justify-center ">
                        <p className="flex flex-row-reverse justify-center text-white font-[ar-meduim] items-center ml-4 md:text-[14.72px] 2xl:text-[24px]"><BsTv  className="ml-[16.8px] lg:w-[22.6px] lg:h-[22.6px]"/>{numberOfCourses} <span className="mr-2"> دورة تدريبية</span></p>
                        <p className="flex flex-row-reverse justify-center text-white font-[ar-meduim] items-center mx-4 md:text-[14.72px] 2xl:text-[24px]"><BsEye className="ml-[16.8px] lg:w-[22.6px] lg:h-[22.6px]"/>{numperOfViews} <span className="mr-2"> مشاهدة</span></p>
                        <p className="flex flex-row-reverse justify-center text-white font-[ar-meduim] items-center mx-4 md:text-[14.72px] 2xl:text-[24px]"><BsPerson className="ml-[16.8px] lg:w-[22.6px] lg:h-[22.6px]"/>{numberOfStudent} <span className="mr-2"> متدرب</span></p>
                    </div>
                    <div className="flex flex-row-reverse items-center max-md:justify-center ">
                        <BsShare className="ml-[32px] text-white mr-[16px] cursor-pointer lg:w-[22.6px] lg:h-[22.6px]"/>
                        <p className=" md:text-[14.66px] 2xl:text-[22px] text-white font-[ar-meduim] cursor-pointer ">مشاركة المدرب</p>
                        <div className="flex mr-4">
                        <li className="border mr-2 rounded-xl list-none w-6 h-6 lg:h-[24px] lg:rounded-lg lg:w-[24px] 2xl:w-[36px] 2xl:h-[36px] flex justify-center items-center">
                        <FacebookShareButton
                            url={'https://www.youtube.com/'}>
                            <FaFacebookF fill="white" className="w-3 h-3" />
                        </FacebookShareButton>
                               {/* */}
                            </li>
                            <li className="border mr-2 rounded-xl list-none w-6 h-6 lg:h-[24px] lg:rounded-lg lg:w-[24px] 2xl:w-[36px] 2xl:h-[36px] flex justify-center items-center">
                                <LinkedinShareButton url={'https://www.youtube.com/'}>
                                    <FaLinkedinIn fill="white" className="w-3 h-3" />
                                </LinkedinShareButton>  
                            </li>
                            <li className="border mr-2 rounded-xl list-none w-6 h-6 lg:h-[24px] lg:rounded-lg lg:w-[24px] 2xl:w-[36px] 2xl:h-[36px] flex justify-center items-center">
                                <TwitterShareButton url={'https://www.youtube.com/'}>
                                    <FaTwitter fill="white" className="w-3 h-3" />
                                </TwitterShareButton>                               
                            </li>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-right  max-md:p-6 w-[60%] max-md:w-[90%] mt-[47px] mr-[7vw]  ">
                <h3 className="font-[ar-bold] text-[#242629] md:text-[24px] lg:text-[32px] md:mb-[20.6px]  lg:mb-[27.5px] ">عن المدرب</h3>
                <p className="text-[#242629] font-[ar-meduim] mb-[17px] md:text-[15px] lg:text-[20px] 2xl:text-[24px]">{about}</p>
                <p className="text-[#007394] cursor-pointer underline font-[ar-bold] md:text-[13.2px]  lg:text-[17.6px] 5xl:text-[22px] ">اقرأ المزيد</p>      
            </div>
        </div>
    )

}
