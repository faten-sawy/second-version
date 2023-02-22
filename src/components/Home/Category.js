
import CategorySlider from "../Sliders/CategorySliders"
import {BsArrowRight} from 'react-icons/bs'
import styles from "../../styles/Home.module.css"
const Category = ({data}) =>{
    return(
        <div className='mr-[8.8vw] ml-[6.7vw] lg:min-h-[166.16px] 2xl:min-h-[248px]'>
            <div className="flex justify-between my-10 max-[512px]:flex-col 2xl:mb-[84px] ">
                <div className="flex flex-col">
                    <h2 className='text-[#007394] text-[16px] lg:text-[16.4px] 2xl:text-[20px] font-[en-meduim]'>Category</h2>
                    <p  className="text-[#142431] font-[en-meduim] lg:text-[18.76px] 2xl:text-[28px]">Browse all course categorise</p>
                </div>
                <button className={` ${styles.button} text-white w-[130px]  h-[44px] rounded-xl flex items-center justify-center max-[512px]:my-4 lg:h-[42.88px] lg:w-[129.98px] lg:text-[15.4px] 2xl:h-[64px] 2xl:w-[194px] 2xl:text-[20px] font-[en-regular]` }> 
                    Browse All <BsArrowRight className='ml-2' fill='white'/>
                </button>
            </div>
            <CategorySlider data={data}/>
        </div>
    )
}

export default Category