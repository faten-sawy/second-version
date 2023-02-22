import Logo from "public/assets/Icons/logo.png"
import Image from "next/image"
import CustomLine from "./CustomLine"
import {BsGeoAlt,BsTelephone} from "react-icons/bs"
import {CiMail} from "react-icons/ci"
import SocialList from "./SocialList"
const Footer = ()=>{

    const linksList =[
        {name:"About Us"},
        {name:"Our Courses"},
        {name:"Free Knwoledge"},
        {name:"Tracks"},
        {name:"Articles"},
        {name:"Trainers"},

    ]
    const more =[
        {name:"Common Question"},
        {name:"Terms Ans Conditions"},
        {name:"Privcy Policy"},
        {name:"Cookies"},
        {name:"Payment Methods"}
    ]
    return(
        <div className="footer min-h-[236px] max-2xl:px-8 pt-[75px] 2xl:px-[84px] ">
            <div className="py-4 lg:flex lg:justify-between "> {/**lg:w-[20%]*/}
                <div className="max-lg:w-[90vw] max-sm:mr-[30px] flex w-[20.1vw] mr-[10.6vw] max-2xl:mr-[5vw] flex-col max-sm:justify-center max-sm:items-center max-lg:items-center">
                    <div className=" max-sm:flex max-sm:items-center sm:flex sm:items-center ">
                        <Image src={Logo} alt="logo" className="max-sm:w-[50px]"/>
                        <h1 className="text-[white]  max-2xl:text-[30px] lg:text-[28px] max-2xl:ml-4 2xl:text-[48px] font-[en-bold] 2xl:ml-4">PLAN B</h1>

                    </div>
                    
                    <p className=" text-white  mt-4 text-[14px]  lg:text-left max-sm:w-[70%] max-md:w-[70%]  text-center lg:text-[13.4px] 2xl:text-[20px] font-[en-meduim]" >
                        our main goal is to integrate technology with quality
                        education in a smooth way so that everyone can
                        get the best education in style
                        clear and simple
                    </p>

                </div>
                <div className=" max-lg:w-[90vw] max-lg:flex max-lg:justify-between lg:flex w-[70vw] lg:justify-between">
                    {/* Container Plan B and More */}
                    <div className="max-lg:flex w-[100%] lg:flex max-lg:justify-between max-sm:flex-wrap  lg:justify-between lg:mr-12 2xl:justify-around ">
                        {/* Plan B */}
                        <div className=" my-4 max-sm:w-[40vw]">
                            <div>
                            <h2 className="max-sm:text-left text-white lg:text-[20px] 2xl:text-[24px] font-[en-bold] text-[20px]">Plan B</h2>
                            <CustomLine/>
                            </div>
                            
                            <ul className="flex flex-col items-start">
                            {linksList.map((item)=>(
                                <li className="text-white text-[15px] flex items-center mb-1  lg:text-[16px] 2xl:text-[20px] font-[en-regular]">
                                    <span className="inline-block relative bottom-[8px] w-[12px] text-[28px]">.</span>
                                    {item.name}
                                </li>
                            ))}

                            </ul>
                            
                        </div>
                        {/* More */}
                        <div className=" my-4 max-sm:w-[40vw]">
                        <div>
                            <h2 className="max-sm:text-left text-white  2xl:text-[24px] font-[en-bold] text-[20px]">More</h2>
                            <CustomLine/>
                            </div>
                            
                            <ul className="flex flex-col items-start">
                            {more.map((item)=>(
                                <li className="text-white text-[15px] flex items-center mb-1 lg:text-[16px] 2xl:text-[20px] font-[en-regular] 2xl:h-[30px] 2xl:mb-[30px]"><span className="inline-block relative bottom-[8px] w-[12px] text-[28px]">.</span>{item.name}</li>
                            ))}

                            </ul>

                        </div>
                        <div className=" my-4 max-sm:w-[40vw]">
                                <div>
                                <h2 className="max-sm:text-left text-white  2xl:text-[24px] font-[en-bold] text-[20px]">Connect With Us</h2>
                                <CustomLine/>
                                </div>
                                
                                <ul className="flex flex-col items-start">
                                    <li className="flex mb-1 text-white justify-center items-center h-[42px] lg:text-[16px] 2xl:text-[20px] font-[en-regular] 2xl:mb-[30px]"><BsGeoAlt fill="white" className="mr-4"/>5125 Elmaadi, Cairo,  Egypt</li>
                                    <li className="flex mb-1 text-white justify-center items-center h-[42px] lg:text-[16px] 2xl:text-[20px] font-[en-regular] 2xl:mb-[30px]"><BsTelephone fill="white" className="mr-4"/>+20120565200</li>
                                    <li className="flex mb-1 text-white justify-center items-center h-[42px] lg:text-[16px] 2xl:text-[20px] font-[en-regular] 2xl:mb-[30px]"><CiMail fill="white" className="mr-4"/>Planb@Gmail.Com</li>
                                </ul>
                                
                        </div>
                        {/**Applications */}
                        <div className=" my-4 max-sm:w-[40vw]">
                            <div>
                            <h2 className=" text-white  2xl:text-[24px] font-[en-bold] text-[20px] max-sm:text-left">Applications</h2>
                            <CustomLine/>
                            </div>
                            
                        <p className="text-white h-[42px] flex items-center justify-center" >Soon...</p>
                            
                        </div>
                    </div>
               
                </div>
            </div>
            {/* Follow Us */}
            <div className=" my-4 mb-[43.9px]">
                    <p className="text-white mb-[23px] max-sm:text-left  2xl:text-[24px] font-[en-bold] text-[20px]">Follow Us</p>             
                    <div className="max-sm:flex max-sm:justify-center">
                    <SocialList listStyle={`max-2xl:h-[43.55px] max-2xl:w-[43.55px] 2xl:h-[65px] 2xl:w-[65px]`} iconStyle={`max-2xl:w-[17.42px] max-2xl:h-[17.42px] 2xl:h-[26px] 2xl:w-[26px]`} color="white" listSize="32px" iconSize="13px"/>    

                    </div>
            </div>
            <p className="text-center text-white text-[12px] py-4 lg:text-[16px] 2xl:text-[20px] font-[en-regular] border-t-[1px] border-[#F5F5F5]">Copyright C 2022 Planb Acadimy. All Righys Reserved</p>           
        </div>
    )
}
export default Footer