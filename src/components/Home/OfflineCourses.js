import NewCoursesSlider from '../Sliders/NewCoursesSlider'
import Router from 'next/router'
import SectionLayout from '@/layouts/SectionLayout'
const OfflineCourses = ({data}) =>{
    const handleRouting = () =>{
        Router.push({
            pathname:"/allcourses",
            query:{
                title:"offline_courses"
            }
        })
    }
    const passedData = {
        title: "Live Attendance Course",
        subTitle: "Browse all courses now",
        routingFunc : handleRouting
    }
    return(
        <SectionLayout data={passedData}>
            <NewCoursesSlider data={data}/>
        </SectionLayout>
       
    ) 
}
export default OfflineCourses