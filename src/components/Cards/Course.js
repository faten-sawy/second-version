import Image from "next/image"
import Instractor from "../../assets/Images/instractor.jpg"
import {convertHoursFromDecimal} from "../../assets/utils/functions"
import { useState } from "react"

import {BsClock,BsStarFill,BsSuitHeart,BsFillSuitHeartFill,BsArrowRight} from 'react-icons/bs'
import {CgNotes} from "react-icons/cg"
import Link from "next/link"
import bg from "../../../public/assets/Images/posternews/bg.png"
import { URL } from "public/assets/utils/environment"
import styles from "../../styles/Home.module.css"

const Course = ({data}) =>{
    const {photo,category,oldPrice,totalHouers,noOfVideos,price,name,isRated,rate,instructors,id,courseTypeId
    } = data

    const [likeFlag,setLikeFlag] = useState(false)
    const handleLike = () =>{
        setLikeFlag(!likeFlag)
    }
    
    const calcDiscount = (before,after) =>{
      const x =  1-(after/before) 
      const discount = x*100

        return Math.trunc(discount)
    }
  

    return (
        <div className={`${styles.card_shadow} text-bold rounded-2xl border border-[#DCDCDC] overflow-hidden w-full h-full  `}>
            {/* Top Part  lg:min-h-[376.7px] 2xl:w-[481px] 2xl:h-[607px]  max-2xl:w-[400px] max-2xl:min-h-[387px] lg:w-[322px] */} 
            <div className="flex justify-between rounded-t-xl p-4 h-[159px] bg-[length:100%_100%] lg:h-[164.97px] 2xl:h-[232.8px] 5xl:h-[291px] w-[100%]" style={{backgroundImage:`url(https://leadorganisation.plan-b-eg.com/assets/Images/courses_images/Flourish%20Journey.jpg )` }}  >
                {/*Like*/}
                <div className="h-7 w-7 bg-white flex justify-center items-center rounded-[50%] drop-shadow-normalShadow lg:w-[33.5px] lg:h-[33.5px] 2xl:w-[40px] 2xl:h-[40px] 5xl:w-[50px] 5xl:h-[50px] ">                            
                    {likeFlag ? <BsFillSuitHeartFill onClick={handleLike} fill="#E40000" className=" max-2xl:w-[16.75px] max-2xl:h-[16.75px] 2xl:w-[25px] 2xl:h-[25px]"/> : <BsSuitHeart onClick={handleLike} fill="#E40000" className=" max-2xl:w-[16.75px] max-2xl:h-[16.75px]  lg:w-[16.75px] lg:h-[16.75px] 2xl:w-[25px] 2xl:h-[25px]"/>}    
                </div>
                  
                <div className="flex flex-col items-center">
                    {category?.name && <p className="bg-[#F2AF13] text-[12px] min-w-[84px] px-2 h-[29px] text-white flex items-center justify-center rounded-[18px] mb-3 text-center 2xl:h-[39px] 2xl:min-w-[104px] 2xl:text-[18px] font-[ar-regular] lg:rounded-xl">{category.name}</p>}
                    {oldPrice !== price && <p className="bg-[#F11010] text-[12px] min-w-[84px] px-2 h-[29px] text-white flex items-center justify-center rounded-[18px]  text-center 2xl:h-[39px] 2xl:w-[104px] 2xl:text-[18px] font-[ar-regular] lg:rounded-xl">{calcDiscount(oldPrice,price)}% OFF</p>}
                </div>
            </div>
            {/* Middle Part */}
            <div className="max-2xl:my-3 max-2xl:mt-0 max-2xl:p-4 max-2xl:pt-2 lg:mt-[19.43px] lg:pb-[26.8px] lg:px-[15.41px] 2xl:mt-[23.2px] 2xl:px-[18.4px] 2xl:pb-[32px] 5xl:mt-[29px] 5xl:px-[23px] 5xl:pb-[40px]">
                <h2 className="capitalize my-4 text-[#142431] max-2xl:text-[14.74px] 2xl:text-[17.6px] 5xl:text-[22px] font-[ar-bold]">{name}</h2>
                <div className="flex justify-between max-2xl:mb-2 lg:mb-[20px] 2xl:mb-[24px] 5xl:mb-[30px]">
                    <div className="flex items-center">
                        <BsClock fill="#009C90" className=" max-2xl:w-[18px] lg:w-[22px] max-2xl:h-[18px] lg:h-[22px] w-[23px] h-[23px]"/>
                        <p className="ml-2 text-[#606065] text-[14px] 2xl:text-[18px] 5xl:text-[20px] font-[ar-regular] 2xl:leading-[20px] 5xl:leading-[25px]">{convertHoursFromDecimal(totalHouers)}</p>
                    </div>
                    <div className="flex items-center"> 
                        <CgNotes fill="red" style={{color:"#009C90"}} className=" max-2xl:w-[18px] lg:w-[22px] max-2xl:h-[18px] lg:h-[22px] w-[23px] h-[23px]"/>
                        <p className="ml-2 text-[#606065] text-[14px] 2xl:text-[18px]  5xl:text-[20px] font-[ar-regular] 2xl:leading-[20px] 5xl:leading-[25px]">{noOfVideos} Lessons</p>
                    </div>
                   
                </div>
                <div className="flex justify-between pr-2">
                    <div className="flex items-center">
                         <Image src={Instractor} className=" max-2xl:w-[20px] max-2xl:h-[20px] 2xl:w-[30px] 2xl:h-[30px] rounded-[50px]"/> 
                       <p className="ml-2 text-[#606065] text-[14px] 2xl:text-[14.4px] 5xl:text-[18px] font-[ar-regular] 2xl:leading-[20px] 5xl:leading-[25px]">{instructors && instructors[0]?.name}</p>
                    </div>
                    {rate &&(
                        <div className="flex items-center"> 
                            <BsStarFill fill="#FFA200" className=" max-2xl:w-[18px] lg:w-[22px] max-2xl:h-[18px] lg:h-[22px] w-[23px] h-[23px]"/>
                            <p className="ml-2 text-[14px] text-[#606065] 2xl:text-[18px] font-[ar-regular] 2xl:leading-[25px]">{rate}</p>
                        </div>
                    )}                   
                </div>
                
            </div>
            {/* Third Part */}
            <div className=" max-2xl:p-4 flex justify-between border-t border-[#DCDCDC] max-2xl:py-[18.76px] 2xl:py-[22.4px] 5xl:py-[28px] px-[1.3vw]">               
                <p className="text-[#007394] max-2xl:text-[18.76px] 2xl:text-[22.4px] 5xl:text-[28px] font-[ar-bold] ">
                    {price} EGP
                    {oldPrice !== price  && (
                        <span className="text-[gray] ml-2 line-through max-2xl:text-[14.74px] 2xl:text-[17.6px] 5xl:text-[22px] font-[ar-meduim]">
                        {oldPrice} EGP
                    </span>           
                    )}                   
                </p>
                <Link href={`/courses/${id}`} className="flex items-center">
                    <p className="text-[#009C90] text-[14px] flex items-center cursor-pointer max-2xl:text-[14.74px] 2xl:text-[18px] 5xl:text-[20px] font-[ar-bold]"> Learn Now <BsArrowRight className="ml-2 mt-1"/></p> 
                </Link>   
            </div>    
        </div>
    )
}

export default Course