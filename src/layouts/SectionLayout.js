
import {BsArrowRight} from 'react-icons/bs'
import styles from "../styles/Home.module.css"
const SectionLayout = ({children,data}) =>{
    const {title,subTitle,routingFunc} = data
  
    return(   
        <div className=' mr-[8.8vw] ml-[6.7vw]'>
            <div className="flex justify-between my-10 max-[512px]:flex-col ">
                <div className="flex flex-col">
                    <h2 className='text-[#007394] lg:text-[16.4px] 2xl:text-[20px] font-[en-meduim]'>{title}</h2>
                    <p className="text-[#142431] lg:text-[18.76px] font-[en-meduim] 2xl:text-[28px]">{subTitle}</p>
                </div>
                <button onClick={routingFunc} className={`${styles.button} text-white w-[130px]  h-[44px]  rounded-xl flex items-center justify-center max-[512px]:my-4 lg:h-[42.88px] lg:w-[129.98px] lg:text-[15.4px]  2xl:h-[64px] 2xl:w-[194px] 2xl:text-[20px] font-[en-regular]`}> 
                    Browse All <BsArrowRight className='ml-2' fill='white'/>
                </button>
            </div>
            {children}
        </div>
    )
}
export default SectionLayout