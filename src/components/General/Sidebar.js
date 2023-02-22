
import { useEffect, useState } from "react";
import styles from "../../styles/SideBar.module.css"
import {BsExclamationCircle,BsPeople,BsPersonPlus,BsQuestionCircle} from "react-icons/bs"
import {MdOutlineArticle,MdOutlinePlayLesson,MdOutlineLocalLibrary,MdOutlineCategory,MdLogin,MdLanguage} from "react-icons/md"
import {BsMoon,BsSun} from "react-icons/bs"
import {AiOutlineMenuFold} from "react-icons/ai"
import SocialList from "./SocialList";
const Sidebar = () =>{
    const [clicked,setClicked] = useState(true)
    const [moodFlag,setMoodFlag] = useState(true)

    let trigger ,sidebar
   
    const handleMood = (e) =>{
        setMood(e.target.value)
        setMoodFlag(!moodFlag)
    }
// Functions
const sidebarToggle = () => {
    setClicked(!clicked)
    console.log(trigger,sidebar)
    trigger = document.querySelector('.trigger');
    sidebar = document.querySelector('.sidebar');
    document.querySelector('.trigger').classList.toggle('active');
    document.querySelector('.sidebar').classList.toggle('show');
};

// Event Listeners
    return(
        <>
        <div class="nav">
      <div class="trigger" onClick={sidebarToggle}><span></span></div>
    </div>

    <div class="sidebar">
      <div class="content">
        <a class="logo">
          <img src="https://jssecrets.com/wp-content/uploads/2022/07/logo.png" />
        </a>
        <ul class="menu">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>UI Design</li>
        </ul>
      </div>
    </div>
        {/*<div className={`hidden max-lg:inline-block w-[32px] h-[32px] cursor-pointer ${clicked ? 'overflow-x-hidden':'overflow-x-auto'} `} onClick={sidebarToggle}>
            <div className="nav">
                <div className="trigger" ><span></span></div>
            </div>

            <div className="sidebar">
                <div className="content">
                    <div className="flex justify-center border-b-2 pb-4 mb-4">
                        <button className="flex items-center justify-center w-full border-r-2"><MdLogin className="mr-2"/>Login</button>
                        <button className="flex items-center justify-center w-full"><BsPersonPlus className="mr-2"/>Sign Up</button>                
                    </div>
                    <ul className={`menu border-b-2`}>
                    <li className="flex side-item items-center text-[8px]"><BsExclamationCircle className="mr-2 " fill="#025B8E"/>About Us</li>
                    <li className="flex side-item items-center text-[8px]"><MdOutlinePlayLesson className="mr-2 " fill="#025B8E"/>Our Courses</li>
                    <li className="flex side-item items-center text-[8px]"><MdOutlineLocalLibrary className="mr-2 " fill="#025B8E"/>Free Knwoledge</li>
                    <li className="flex side-item items-center text-[8px]"><MdOutlineCategory className="mr-2 " fill="#025B8E"/>Tracks</li>
                    <li className="flex side-item items-center text-[8px]"><MdOutlineArticle className="mr-2 " fill="#025B8E"/>Articles</li>
                    <li className="flex side-item items-center text-[8px]"><BsPeople className="mr-2 " fill="#025B8E"/>Trainers</li>
                    </ul>
                    <div className="hidden max-md:block mt-4 ">
                        <div className="flex items-center justify-between">  
                        <div className="flex items-center justify-start">
                            {moodFlag ? <BsSun className="w-[37px] h-[20px]  inline-block" fill="#025B8E"/>:<BsMoon className="w-[23px]  inline-block" fill="#025B8E"/>}
                            <BsQuestionCircle className="w-[37px] h-[20px]  inline-block" fill="#025B8E" style={{translate:"scale(1,-1)"}}/>
                            <MdLanguage className="w-[37px] h-[20px]  inline-block" fill="#025B8E"/>
                        </div> 
                       <SocialList color="#025B8E"/>

                        </div>
                        

                    </div>
                </div>
            </div>
    </div>*/}
    </>
    )
}
export default Sidebar