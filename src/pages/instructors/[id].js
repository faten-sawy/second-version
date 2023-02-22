
import InstructorDetailsCard from "@/components/Cards/InstructorDetailsCard"
import Course from "@/components/Cards/Course"
export default function InstructorDetails ({instructor}){   
    console.log(instructor)
    return(
        <div className="h-auto">
            <InstructorDetailsCard instructor={instructor}/>
            <div className="mt-[82.5px] text-[#142431] text-[32px] font-[ar-bold] md:ml-[7vw] md:mr-[7vw]">
                <p className="text-right max-md:pr[20px] md:text-[24px] lg:text-[32px]">الدورات التدريبية</p>
                <div className="my-[41px] flex flex-wrap justify-center md:justify-between">
                    {instructor?.courses.map((course)=>(
                    <div key={course.id} className="lg:mr-[3.35vw] 2xl:mr-[5vw] lg:min-h-[376.7px] 2xl:w-[25vw] 2xl:h-[485.6px]  5xl:h-[607px]  max-lg:w-[400px] max-lg:min-h-[387px] md:w-[322px]">
                        <Course data ={course}/>                
                    </div>             
                ))}              
                </div>
            </div>
            
        </div>               
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_INSTRUCTOR_DETAILS}?instructorId=${context.params.id}&lang=ar`)
    const data = await res.json()
    return{
        props:{instructor:data}
    }
}