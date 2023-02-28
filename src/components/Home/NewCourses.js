import OnlineCoursesSlider from '../Sliders/OnlineCourses'
import SectionLayout from '@/layouts/SectionLayout'
import Router from 'next/router'

const NewCourses = ({data}) =>{
    const handleRouting = () =>{
        Router.push({
            pathname:"/allcourses",
            query:{  
                title:"online_courses"           
            }
        })
    }
   
    const passedData = {
        title:"New Courses",
        subTitle:"Browse all courses categorise",
        routingFunc : handleRouting

    }
   return(
        <SectionLayout data={passedData} className="lg:min-h-[815.67px]">
            <OnlineCoursesSlider data={data}/>
        </SectionLayout>
   ) 

}

export default NewCourses