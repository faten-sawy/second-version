import axios from "axios"
import { useEffect, useState } from "react"
import { URL } from "@/assets/utils/environment"
import { filterCourses } from "@/assets/utils/functions"
import PathInfoCard from "@/components/PathDetails/PathInfoCard"

const PathDetails = () =>{
    const [path,setPath] = useState({})

    useEffect(()=>{
        axios.get(URL.HOME_COURSES).then(res=>{
           const arr = filterCourses(res.data)
            setPath(arr.paths[0])
            console.log(arr)
        })
    },[])
    return(
        <div>
            {path && console.log(path)}
            <PathInfoCard path={path}/>
        </div>
    )
}

export default PathDetails