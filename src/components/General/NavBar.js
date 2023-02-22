import { useState } from "react"
import {BsMoon,BsSun} from "react-icons/bs"
import SocialList from "./SocialList"
import {FaLinkedinIn,FaYoutube,FaTwitter,FaFacebookF} from "react-icons/fa"
const NavBar = () =>{
    const [moodFlag,setMoodFlag] = useState(true)
    const [mood,setMood] = useState("")

    const handleMood = (e) =>{
        setMood(e.target.value)
        setMoodFlag(!moodFlag)
    }
    const handleLanguage = (e) =>{
        console.log(e.target.value)
    }
    const links = Object.freeze({
        facebook:'https://www.facebook.com/PlanBCompanyegypt',
        twitter:'https://twitter.com/Plan_B_2017',
        youtube:'https://www.youtube.com/channel/UC2IaEDhnP0HDcOyNJLtxIdg',
        linkedin:'https://www.linkedin.com/company/planbco/'
    })

    const handleRedirect = (link) =>{

        window.open(link,'_blank')
    }

    return(
        <nav className="bg-[#025B8E] h-[68px] relative px-8 flex justify-between items-center max-md:hidden 2xl:px-[40px]">
            <div className="flex items-center">
                <div className="mr-8">
                    <select onChange={handleMood} className="bg-transparent outline-none lg:text-[12px] text-[15px] cursor-pointer text-[white] leading-4" name="cars" id="cars">
                        <option className="bg-white text-black md:text-[10px] text-[15px] leading-4  5xl:text-[15px] font-[en-meduim]"  value="light">English</option>
                        <option className="bg-white text-black md:text-[10px] text-[15px] leading-4 " value="dark">Arabic</option>  
                    </select>
                </div>
                <div>
                    {moodFlag ? <BsSun className="w-[37px] h-[20px]  inline-block" fill="white"/>:<BsMoon className="w-[23px]  inline-block" fill="white"/>}
                    <select onChange={handleLanguage} className="bg-transparent outline-none lg:text-[12px] text-[15px] cursor-pointer text-[white] leading-4 " name="cars" id="cars">
                        <option className="bg-white text-black md:text-[10px] text-[15px] leading-4 "  value="light">Light Mode</option>
                        <option className="bg-white text-black md:text-[10px] text-[15px] leading-4 " value="dark">Dark Mode</option>  
                    </select>
                </div>      
            </div>

            <div className="flex items-center ">              
                <div className="flex lg:mr-4 md:mr-[20px]  5xl:mr-[215px]">
                    <p className="text-white cursor-pointer mr-8 lg:text-[12px] 5xl:text-[16px] font-[en-regular]">Common Questions</p>
                    <p className="text-white cursor-pointer lg:text-[12px] 5xl:text-[16px] font-[en-regular]">Call Us</p>
                </div>              
                {/*<SocialList color="white" listSize="32px" iconSize="13px" />*/}
                <ul className="list-none flex">
                    <li className={`cursor-pointer border border-[white] mr-2 md:h-[28px] md:w-[28px] h-[32px] w-[32px] flex justify-center items-center rounded-[11px]`} onClick={()=>handleRedirect(links.facebook)}>
                        <FaFacebookF className={`inline-block w-[13px] h-[13px]`} fill="white"/>
                        </li>
                    <li className={`cursor-pointer border border-[white] mr-2 md:h-[28px] md:w-[28px] h-[32px] w-[32px] flex justify-center items-center rounded-[11px]`} onClick={()=>handleRedirect(links.twitter)}>
                        <FaTwitter className={`inline-block w-[13px] h-[13px]`} fill="white"/>
                        </li>
                    <li className={`cursor-pointer border border-[white] mr-2 md:h-[28px] md:w-[28px] h-[32px] w-[32px] flex justify-center items-center rounded-[11px]`} onClick={()=>handleRedirect(links.youtube)}>
                        <FaYoutube className={`inline-block w-[13px] h-[13px]`} fill="white"/>
                        </li>
                    <li className={`cursor-pointer border border-[white] mr-2 md:h-[28px] md:w-[28px] h-[32px] w-[32px] flex justify-center items-center rounded-[11px]`} onClick={()=>handleRedirect(links.linkedin)}>
                        <FaLinkedinIn className={`inline-block w-[13px] h-[13px]`} fill="white"/>
                        </li>
                </ul>
            </div>            
        </nav>
    )
}
export default NavBar