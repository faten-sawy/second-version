
import Filter from "@/components/AllPaths/filter"
import { useEffect, useState } from "react"
import axios from "axios"
import Course from "@/components/Cards/Course"
const AllPathes = () =>{
    const [items,setItems] = useState([])
   
    const recieveFilteredItems = (data) =>{
        console.log(data)
        setItems(data)
    }
    return(
        <div className="mr-[8.125vw] ml-[8.7vw]"> 
            <Filter passFilterdItems={recieveFilteredItems}/>
            <div className="flex flex-wrap justify-between max-[774px]:justify-center">
                {items?.map((item)=>(
                    <div className="mb-16 lg:min-h-[376.7px] 2xl:w-[25vw] 2xl:h-[485.6px]  5xl:h-[607px]  max-lg:w-[400px] max-lg:min-h-[387px] md:w-[322px]">
                        <Course data={item}/>
                    </div>
                    
                ))}

            </div>
            

        </div>
        
    )
}

export default AllPathes