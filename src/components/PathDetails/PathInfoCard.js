import { useState } from "react"
import {BsSuitHeart,BsFillSuitHeartFill,BsPerson} from "react-icons/bs"
import {IoPersonOutline} from "react-icons/io"
import { convertHoursFromDecimal } from "@/assets/utils/functions"


const PathInfoCard = ({path}) =>{
    const {instractorName,noOfVideos,totalHouers,} = path
    const [likeFlag,setLikeFlag] = useState(false)
    const handleLike = () =>{
        setLikeFlag(!likeFlag)
    }
    const info = [
        {
            icon:BsPerson,
            name:"ألمدرب",
            /* content: */
        }
    ]
    console.log({path})
    return(
        <div className="border border-[gray] rounded-lg w-[500px] p-4">
            <div className="flex justify-between items-center flex-row-reverse border-b border-gray-200 pb-4">
                <h3>تفاصيل الدورة التدريبية</h3>
                <div className="bg-gray-200 w-8 flex items-center rounded-full h-8 justify-center cursor-pointer">
                {!likeFlag ? <BsSuitHeart onClick={handleLike}/> : <BsFillSuitHeartFill fill="red" onClick={handleLike} />}
                </div>
               
            </div>
            <div>
                <div>

                </div>

            </div>
            
           
        </div>
    )
}

export default PathInfoCard