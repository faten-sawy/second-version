import InstructorSlider from '../Sliders/InstructorsSlider'
import SectionLayout from '@/layouts/SectionLayout'
import Router from 'next/router'

const Trainers = ({data}) =>{
    const handleRouting = () =>{
        Router.push({
            pathname:"/allinstructors",
            query:{  
                title:"instructors"           
            }
        })
    }

    const passedData ={
        title: "Plan B Trainers",
        subTitle:"Our Trainers Are Specialists And Qualified To Provide The Knowledge And Knowledge Gained",
        routingFunc: handleRouting
    }
   
    return (
        <SectionLayout data={passedData} className="max-2xl:my-[34px] 2xl:h-[866px] 2xl:pt-[123px]">
            <InstructorSlider data={data}/>
        </SectionLayout>
    )
}
export default Trainers