import axios from "axios"
import { useEffect, useState } from "react"
import InstructorsOpinionSlider from "../Sliders/InstructorsOpinionSlider"

const InstructorsOpinion = ({data}) =>{
    const [opinions,setOpinions] = useState([])
    console.log(data)
    useEffect(()=>{
        axios.get("https://test2.plan-b-eg.com/api/InstrOpinionsController/getINsOpinion?lang=en").then(res=>{
            setOpinions(res.data)
            console.log(res.data)
        })
    },[])
    return(
       <div className=" flex justify-center">
         <div className="flex flex-col justify mt-8 px-8 md:w-[90vw] max-md:w-[100vw]  w-[82.6vw] max-md:mt-[20px]  max-md:flex-col max-md:items-end">
            <p className="text-[#007394] text-right font-[ar-bold] mb-[15px] 5xl:text-[20px]">آراء المدربين</p>
            <p className="text-[#142431] text-right mb-[54px]  font-[ar-regular] sm:text-[18.76px] 2xl:text-[28px]">آراء المدربين في منصة بلان ب</p>
            <div className="h-[500px] w-full">
                <InstructorsOpinionSlider data={opinions}/>
            </div>
            
        </div>

       </div>
       
    )
}


export default InstructorsOpinion