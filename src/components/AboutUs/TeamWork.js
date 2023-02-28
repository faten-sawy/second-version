
import styles from "../../styles/Home.module.css"
import {BsArrowLeft} from "react-icons/bs"
import TeamWorkSlider from "../Sliders/TeamWorkSlider"
const TeamWork = ({data}) => {
    return(
        <div className=" flex justify-center my-10 ">
            <div className="w-[85.4vw] h-full">
                <div className=" mb-[77px] flex justify-between max-sm:flex-col-reverse max-sm:items-end ">
                    <button className={`${styles.button} text-white w-[130px] max-sm:mt-4  h-[44px] rounded-xl flex items-center justify-center max-[512px]:my-4 lg:h-[42.88px] lg:w-[129.98px] max-2xl:text-[15.4px] 2xl:h-[64px] 2xl:w-[194px] 2xl:text-[20px] font-[ar-regular]`}> 
                        <BsArrowLeft className='mr-2' fill='white'/> تصفح الكل
                    </button>
                    <div className="flex flex-col">
                        <h2 className='text-[#007394] text-right max-2xl:text-[16.4px] 2xl:text-[20px] font-[ar-meduim]'>فريق العمل</h2>
                        <p className="text-[#142431] text-right max-2xl:text-[18.76px] font-[ar-meduim] 2xl:text-[28px]">فريق عمل بلان ب متخصصون و مؤهلون لتقديم العلم والمعرفة</p>
                    </div> 
                </div>
                <div>
                    {data && (
                        <TeamWorkSlider data={data}/>
                    )}
                </div> 
            </div>             
        </div>
    )
}
export default TeamWork