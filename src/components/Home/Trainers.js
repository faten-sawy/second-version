import {BsArrowRight} from 'react-icons/bs'
import InstructorSlider from '../Sliders/InstructorsSlider'
import styles from "../../styles/Home.module.css"
const Trainers = ({data}) =>{
   
    return (
        <div className="mr-[8.8vw] ml-[6.7vw] max-2xl:my-[34px]  2xl:h-[866px] 2xl:pt-[123px]">
             <div className="flex justify-between my-10 max-[512px]:flex-col 2xl:mb-[42px] 2xl:mt-[53px]">
                <div className="flex flex-col max-lg:w-[70%] max-[512px]:w-[100%]">
                    <h2 className='text-[#007394] 2xl:text-[20px] font-[en-meduim]'>Plan B Trainers</h2>
                    <p className="text-[#142431] font-[en-meduim] 2xl:text-[28px] 2xl:w-[90%]">Our Trainers Are Specialists And Qualified To Provide The Knowledge And Knowledge Gained</p>
                </div>
                <button className={`${styles.button} text-white w-[130px]  h-[44px] rounded-xl flex items-center justify-center max-[512px]:my-4 lg:h-[42.88px] lg:w-[129.98px] lg:text-[15.4px]  2xl:h-[64px] 2xl:w-[194px] 2xl:text-[20px] font-[en-regular]`}> 
                    Browse All <BsArrowRight className='ml-2' fill='white'/>
                </button>
            </div>
            <InstructorSlider data={data}/>
        </div>

    )
}
export default Trainers