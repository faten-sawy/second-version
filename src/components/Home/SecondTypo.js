import Image from "next/image"
import laps from "public/assets/Images/general/man-with-laptop.878cf545.png"
import List from "../General/List"
import styles from "../../styles/Home.module.css"
import FeatureList from "../General/FeatureList"

const SecondTypo = () =>{
    return(
        <div className="flex mr-[8.8vw] ml-[6.7vw] max-2xl:my-12 justify-between flex-row max-md:flex-col  lg:pb-[83.08px] ">
            <div className="w-[48%] max-md:w-full max-md:mb-8 ">
                <Image src={laps} alt="right-side-img" className="max-w-[100%] h-[100%]"/>
            </div>
            <div className="w-[48%] lg:w-[50%] max-lg:pr-8 max-md:w-full ">
                <h3 className="text-[#007394] text-[16px] lg-text-[14.74px] lg:mb-[22.78px]  2xl:text-[22px] font-[en-meduim] 2xl:mb-[34px]">ABOUT OUR PLATFORM</h3>
                <h2 className="text-[#142431]  text-[20px] lg:w-[299.49px] lg:text-[17.2px] 2xl:text-[32px] font-[en-bold] 2xl:w-[647px]">Develop Your Skills, Learn Something New, And Grow Your OwnSkills From Anywhere In The World</h2>
                <p className="text-[#142431] lg:mt-[44.52px] mb-4 text-[14px] lg:text-[13.4px] lg:mb-[29.48px] 2xl:text-[20px] font-[en-regular] 2xl:mb-[44px]">inspiring and empowering you to achieve your professional and personal goals learning and development by providing you with the knowledge and experience that enjoyed by senior mentors and coaches</p>
                <FeatureList/>
                <button className={`${styles.list_button} mt-4 h-[44px] w-[170px] text-white rounded-xl lg:h-[52.26px] lg:w-[187.6px] lg:text-[14.74px] 2xl:h-[78px] 2xl:w-[280px] 2xl:text-[22px] font-[en-meduim] `}>
                    START LEARNING NOW
                </button>
                
            </div>
        </div>
    )
}
export default SecondTypo