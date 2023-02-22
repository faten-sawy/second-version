
const CoursesDetails = ()=>{
   /*  console.log(course) */
    return(
        <p>HI FROM COURSES DETAILS</p>
    )
}
export default CoursesDetails

/* export async function getServerSideProps(context){
    const res = await fetch(`https://test2.plan-b-eg.com/api/Courses/GetCourseDetailsIfsectionOrNot?courseId=${context.params.id}&lang=en`)
    const data = await res.json()

    return {
        props : {
            course:data
        }
    }
} */