import Image from "next/image"
import employee from "public/assets/Images/instructor_image/EVP-Employee.png"


const Employee = ({data}) =>{
    const {photo,name,jobTitle} = data

    console.log(data)    
    return(
        <div className="w-full h-full">
            {/*TOP PART*/}
            <div className="flex justify-center h-[319px] mb-[23px] rounded-[20px] ">
                <Image className=" rounded-[20px]" width={200} height={200} style={{width:"100%",height:"100%"}} src={employee} alt="employee photo"/>
            </div>
            <div className="mb-[23px]" >
                <p className="text-[#142431] text-center text-[23px] font-[ar-bold]">{name}</p>
                <p className="text-[#142431] text-[21px] font-[ar-meduim] text-center">{jobTitle}</p>
            </div>
        </div>
    )
}

export default Employee
