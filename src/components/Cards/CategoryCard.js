

const CategoryCard = ({data}) =>{
    const {name,numberOfCourses,photo} = data
    return(
        <div className="rounded-xl h-[100%] flex flex-col items-center  text-white  category-card">
            <p className=" md:text-[18px] max-md:mt-[23px] lg:mt-[58.29px] lg:mb-[12px] 2xl:text-[24px] font-[en-bold] 2xl:mt-[87px] 2xl:mb-[18px]">{name}</p>
            <p className=" md:text-[18px] 2xl:text-[22px] font-[en-regular]">{numberOfCourses} Courses</p>
        </div>
    )
}

export default CategoryCard