
import logo from "../../../public/assets/Icons/logo.png"
import Image from "next/image"
import Sidebar from "./Sidebar"
import {BsSearch,BsCart3,BsList} from "react-icons/bs"
import Link from "next/link"

const Header = () =>{
    return(
        <div className="h-[72px] max-md:h-[60px] header-shadow flex  items-center px-8 justify-between relative 2xl:px-[40px] 5xl:px-[80px] 2xl:h-[132px]">
            <div className=" min-lg:w-[15%] 2xl:h-[67px] 2xl:w-[187px]">
                <Link className="flex items-center" href={"/"}>
                <Image src={logo} alt="logo" className="max-xl:w-[50px] w-[50px] 2xl:h-[67px] 2xl:w-[75px]"/>
                <p className="text-[#0D3E66] text-[20px] font-extrabold ml-2 lg:text-[14.66px] max-xl:text-[18px] 2xl:text-[22px] 2xl:font-[en-bold]" >PLANE B</p>
                </Link>
                
            </div>
            <div className="flex items-center justify-between max-lg:hidden w-[85%]">
                <div className="max-xl:ml-4">
                    <ul className="list-none flex justify-center">
                        <li className="text-[#2B2E30] cursor-pointer text-[18px] max-xl:text-[12px] mr-4 lg:text-[11.72px] 2xl:text-[16px] font-[en-meduim] 2xl:mr-[31px] 5xl:text-[18px]">About Us</li>
                        <li className="text-[#2B2E30] cursor-pointer text-[18px] max-xl:text-[12px] mr-4 lg:text-[11.72px] 2xl:text-[16px] font-[en-meduim] 2xl:mr-[31px] 5xl:text-[18px]">Our Courses</li>
                        <li className="text-[#2B2E30] cursor-pointer text-[18px] max-xl:text-[12px] mr-4 lg:text-[11.72px] 2xl:text-[16px] font-[en-meduim] 2xl:mr-[31px] 5xl:text-[18px]">Free Knwoledge</li>
                        <li className="text-[#2B2E30] cursor-pointer text-[18px] max-xl:text-[12px] mr-4 lg:text-[11.72px] 2xl:text-[16px] font-[en-meduim] 2xl:mr-[31px] 5xl:text-[18px]">Tracks</li>
                        <li className="text-[#2B2E30] cursor-pointer text-[18px] max-xl:text-[12px] mr-4 lg:text-[11.72px] 2xl:text-[16px] font-[en-meduim] 2xl:mr-[31px] 5xl:text-[18px]">Articles</li>
                        <li className="text-[#2B2E30] cursor-pointer text-[18px] max-xl:text-[12px] mr-4 lg:text-[11.72px] 2xl:text-[16px] font-[en-meduim] 2xl:mr-[31px] 5xl:text-[18px]">Trainers</li>
                    </ul>
                </div>
            
                <div className="flex items-center">
                    <input type="text" className="border border-[#DCDCDC] outline-none h-[36px] max-w-[325px] text-[12px] px-2 rounded-l 2xl:w-[355px] 2xl:h-[56px] 2xl:text-[14px] 2xl:font-[en-regular]"/>
                        <BsSearch className="inline-block relative right-6 w-[14px] h-[14px]" fill="#007394"/>

                </div>
                
                
                <div className="flex items-center">
                <div className="flex flex-row-reverse mr-4 2xl:h-[40.86px] 2xl:w-[48px]">
                    <span className="bg-[#FFAE0D] flex items-center relative bottom-2 right-1 justify-center text-white rounded-xl w-[16px] h-[16px] text-[10px] 2xl:h-[23px] 2xl:w-[22px] 2xl:text-[14px] 2xl:font-[en-regular] ">2</span>
                    <BsCart3 className=" h-auto w-auto"/>
                </div>
                    <button className="rounded-[18px] mr-[10px] w-[100px] max-xl:w-[90px] h-[36px] bg-[#007394] text-white lg:text-[12px] lg:w-[80.4px] lg:h-[37.52px] 2xl:h-[56px] 2xl:w-[120px] 2xl:text-[18px] font-[en-regular]" >Login</button>
                    <button className="rounded-[18px] w-[100px] max-xl:w-[90px] h-[36px] border border-[#007394] lg:text-[12px] lg:w-[80.4px] lg:h-[37.52px] 2xl:h-[56px] 2xl:w-[120px] 2xl:text-[18px] font-[en-regular]">Register</button>
                </div>
            </div>
           {/*  <Sidebar/>*/}
           
        </div>
    )
}
export default Header