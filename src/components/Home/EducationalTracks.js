import NewCoursesSlider from "../Sliders/NewCoursesSlider"
import {BsArrowRight} from 'react-icons/bs'
import styles from "../../styles/Home.module.css"

const EducationalTracks = ({data}) =>{
    return(
        <div className='mr-[8.8vw] ml-[6.7vw] max-lg:my-[34px]  lg:h-[623px] overflow-hidden  2xl:h-[930px]'>
            <div className="flex justify-between my-10 max-[512px]:flex-col 2xl:mb-[42px] 2xl:mt-[53px] ">
                <div className="flex flex-col">
                    <h2 className='text-[#007394] lg:text-[16.4px] 2xl:text-[20px] font-[en-meduim]'>Educational Tracks</h2>
                    <p className="text-[#142431] lg:text-[18.76px] font-[en-meduim] 2xl:text-[28px]">Paths From Beginning To Professionalism</p>
                </div>
                <button className={` ${styles.button} text-white w-[130px]  h-[44px] rounded-xl flex items-center justify-center max-[512px]:my-4 lg:h-[42.88px] lg:w-[129.98px] lg:text-[15.4px] 2xl:h-[64px] 2xl:w-[194px] 2xl:text-[20px] font-[en-regular]` }> 
                    Browse All <BsArrowRight className='ml-2' fill='white'/>
                </button>
            </div>
            <NewCoursesSlider data={data}/>
        </div>

    )

}
export default EducationalTracks