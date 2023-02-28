import NewCoursesSlider from "../Sliders/NewCoursesSlider"
import SectionLayout from "@/layouts/SectionLayout"
const EducationalTracks = ({data}) =>{
    const handleRouting = () =>{
        Router.push({
            pathname:"/allcourses",
            query:{  
                title:"offline_courses"          
            }
        })
    }
    const passedData ={
        title:"Educational Tracks",
        subTitle :"Paths From Beginning To Professionalism",
        routingFunc:handleRouting
    }
    return(
        <SectionLayout data={passedData} className="max-lg:my-[34px]  lg:h-[623px]  2xl:h-[930px]">
            <NewCoursesSlider data={data}/>
        </SectionLayout>
    )

}
export default EducationalTracks