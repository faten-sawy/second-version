
import Image from "next/image"
import laps from "public/assets/Images/general/Group 102215.png"
import List from "../General/List"
import styles from "../../styles/Home.module.css"

const Typo = () =>{
    return(
        <div className="flex justify-center py-[20px] px-[40.2px] relative bg-[#FAFAFA] lg:px-[53.6px] lg:pb-[83.08px] 2xl:px-[80px] 2xl:pb-[124px]">
            <div className="lg:w-[1181.9px] 2xl:w-[1764px] flex flex-row max-md:flex-col justify-between " >
                <div className=" w-[48%] mr-4 max-md:w-full max-md:mt-8 ">
                    <Image src={laps} alt="right-side-img" className="h-[80%] w-full "/>
                </div>
                <div className=" w-[48%] ml-4 max-md:w-full 2xl:ml-[70px]">
                    <p className="text-[#007394] md:text-[22px] text-[16px] lg-text-[14.74px] lg:mb-[22.78px] 2xl:text-[22px] font-[en-meduim] 2xl:mb-[34px]">THE BEST EDUCATIONAL PLATFORM</p>
                    <h2 className="text-[#142431] md:text-[26px]  mr-4 lg:w-[299.49px] lg:text-[17.2px] 2xl:text-[26px] font-[en-bold] 2xl:w-[447px]">THE BEST EDUCATIONAL PLATFORMTHE BEST TRAINING COURSES</h2>
                    <p className="text-[#142431] mt-8 mb-4 text-[14px] mr-4 md:text-[20px] lg:text-[13.4px] lg:mb-[29.48px]  2xl:text-[20px] font-[en-regular] 2xl:mb-[44px] 2xl:w-[747px]">our mission is to provide the best continuously developed arabic educational content it helps you build your personality and achieve your future dreams</p>
                    <List/>
                    <button className={`${styles.list_button} mt-4 h-[44px] w-[140px] text-white rounded-xl md:text-[15.42px] md:h-[42.26px] md:w-[137.6px] 2xl:text-[26px] font-[en-regular] 2xl:w-[280px] 2xl:h-[78px] 2xl:mt-[54px]`}>
                        LEARN NOW
                    </button>                    
                </div> 
            </div>  
        </div>
        
    )
}
export default Typo