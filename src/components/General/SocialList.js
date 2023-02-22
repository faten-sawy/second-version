
import {FaLinkedinIn,FaYoutube,FaTwitter,FaFacebookF} from "react-icons/fa"

const SocialList = ({listSize,iconSize,listStyle,iconStyle}) =>{
    const links = Object.freeze({
        facebook:'https://www.facebook.com/PlanBCompanyegypt',
        twitter:'https://twitter.com/Plan_B_2017',
        youtube:'https://www.youtube.com/channel/UC2IaEDhnP0HDcOyNJLtxIdg',
        linkedin:'https://www.linkedin.com/company/planbco/'
    })

    const handleRedirect = (link) =>{
        window.open(link,'_blank')
    }
    return (
        <ul className="list-none flex">
           <li className={`cursor-pointer ${listStyle} border border-white mr-2  flex justify-center items-center rounded-[11px]`} onClick={()=>handleRedirect(links.facebook)}>
            <FaFacebookF className={`inline-block ${iconStyle}`} fill="white"/>
            </li>
           <li className={`cursor-pointer ${listStyle} border border-white mr-2  flex justify-center items-center rounded-[11px]`} onClick={()=>handleRedirect(links.twitter)}>
            <FaTwitter className={`inline-block ${iconStyle}`} fill="white"/>
            </li>
           <li className={`cursor-pointer ${listStyle} border border-white mr-2  flex justify-center items-center rounded-[11px]`} onClick={()=>handleRedirect(links.youtube)}>
            <FaYoutube className={`inline-block ${iconStyle}`} fill="white"/>
            </li>
           <li className={`cursor-pointer ${listStyle} border border-white mr-2  flex justify-center items-center rounded-[11px]`} onClick={()=>handleRedirect(links.linkedin)}>
            <FaLinkedinIn className={`inline-block ${iconStyle}`} fill="white"/>
            </li>
        </ul>    
    )
}
export default SocialList