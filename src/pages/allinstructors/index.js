import axios from "axios"
import { useEffect, useState } from "react"
import {BsArrowLeft} from "react-icons/bs"
import instructor from "../../assets/Images/instractor.jpg"
import { useInstructor } from "@/assets/utils/Hooks/useInstructos"
import styles from "../../styles/AllInstructors.module.css"
import InstractorCard from "@/components/Cards/InstructorsCard"
import Progress from "@/components/General/Progress"
import { URL } from "public/assets/utils/environment"
import InstructosOpinion from "@/components/AllInstructors/Opinions"
import InstructorSlider from "@/components/Sliders/InstructorsSlider"
import Join from "@/components/AllInstructors/Join"

const AllInstractors = () =>{
    console.log(process.env.NEXT_PUBLIC_BASE)
    const[limit,setLimit] = useState(12)
    const {data} = useInstructor(limit)
    
    const [showingData,setShowingData] = useState([])
    const [precent,setPrecent] = useState((12/60)*100)

    useEffect(()=>{
        console.log("HI")
        if(data){
            if(limit >12){
                let arr = [...data]
                let length = data.length
                arr.length = length-6       
                setShowingData(arr)
                setPrecent((arr.length/60)*100)               
            }
            else{
                setShowingData(data)
                handlePercent()
            }     
        }
    },[data])
    const handlePercent = () =>{
        const percent = (showingData.length /60 ) * 100
        setPrecent(percent)
    }
    
    const handleLimit = () =>{
        if(data){
            if(showingData.length === data.length){
                setLimit(limit+12)
                setPrecent((showingData.length/60)*100)  
            }
            else {
                setShowingData(data)
                setPrecent((data.length/60)*100)           
            }
        } 
    }

    return(
        <div>
            <div className={`w-full ${styles.trainer_top_part} relative max-2xl:h-[261px] 2xl:h-[389.6px]  5xl:h-[487px]`} >
                <p className="font-[ar-bold] relative text-white  max-sm:left-[64vw] max-lg:left-[74vw] left-[84vw] top-[44.5%] max-2xl:text-[26.8px]  2xl:text-[40px]">المدربين</p>
            </div>
            <div className="mt-[17px] flex justify-center 5xl:min-h-[930px] 5xl:pb-16 ">
                <div className=" h-full w-[82.6vw]">
                    <div className="flex flex-row-reverse justify-between mt-8 px-8   max-md:mt-[20px]  max-md:flex-col max-md:items-end ">
                        <div className="text-right mt-[36px] max-md:mt-0 ">
                            <p className="text-[#007394] font-[ar-bold] mb-[15px] 5xl:text-[20px]">مدربين بلان ب</p>
                            <p className="text-[#142431]  font-[ar-regular] sm:text-[18.76px] 2xl:text-[28px]">مدربينا متخصصون ومؤهلون لتقديم العلم والمعرفة المكتسبة</p>
                        </div>
                        <button className=" mt-[48px] max-md:mb-8 font-[ar-meduim] flex items-center justify-center bg-[#FFA200] rounded-xl  text-white p-4 w-[16vw] 2xl:text-[22px] max-md:w-[180px] max-md:mt-[30px] 5xl:h-[82px]"><BsArrowLeft className="mr-2"/>سجل الآن</button>                  
                    </div>
                    <div className="flex max-md:hidden flex-wrap mt-[96px] justify-center">
                        {showingData?.map((item,_,arr)=> 
                            <div key={item.id} className="w-[266px] lg:h-[203px]  2xl:h-[303px]">
                                <InstractorCard data={item}/> 
                            </div>                      
                        )}
                    </div> 
                    <div className="flex items-center flex-col max-md:hidden ">
                        <p className="2xl:text-[18px] max-lg:text-[12.5px] lg:text-[14px] mb-[15px] mt-[74px] text-[#606065] font-[ar-bold]">عرض {showingData.length} من أصل 60 مدرب</p>  
                        <Progress percent={`${precent}%`}/>
                        <button onClick={handleLimit}  className="w-[12.5vw] max-lg:w-[150px] outline-none max-2xl:mt-[30.82px] 2xl:mt-[46px] rounded-2xl text-[#02608E] border max-2xl:text-[14.74px] 2xl:text-[22px] font-[ar-bold] border-[#02608E] md:h-[52.26px] 2xl:h-[78px] bg-[#01a28e12]">حمل المزيد</button>     
                    </div>
                    <div className=" max-md:block hidden">
                        {showingData && <InstructorSlider data={showingData}/>}
                    </div>                            
                </div>
            </div>
           <InstructosOpinion/>
           <Join/>
        </div>

        

    )
}


export default AllInstractors