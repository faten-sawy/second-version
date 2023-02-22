import Image from "next/image"
import Link from "next/link"
import InstructorPhoto from "../../assets/Images/instractor.jpg"

const InstractorCard = ({data}) =>{
    const {name,jobTitle,id} = data
    return(
        <div className="flex justify-center items-center flex-col 2xl:h-[303px] w-full">
            <Link href={`/instructors/${id}`}>
                <Image src={InstructorPhoto} alt="instrcutor Img" className="h-[90px] w-[90px] mb-4 rounded-[50%] lg:w-[113.23px] lg:h-[113.23px] 2xl:w-[169px] 2xl:h-[169px]"/>
            </Link>
            <p className="max-2xl:font-bold text-center text-[#142431] max-2xl:text-sm lg:text-[14.74px] 2xl:text-[22px] font-[en-bold]">{name}</p>
            <p className="text-center text-[#142431] lg:text-[13.4px] 2xl:text-[20px] font-[en-regular]">{jobTitle}</p>
        </div>
    )
}
export default InstractorCard