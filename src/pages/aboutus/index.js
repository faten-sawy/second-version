import FeatureCard from "@/components/Cards/Features"
import MiddleSection from "@/components/AboutUs/MiddleSection"
import Offers from "@/components/AboutUs/Offers"
import TeamWork from "@/components/AboutUs/TeamWork"
import styles from "../../styles/Aboutus.module.css"
import vision from "../../../public/assets/Icons/vision.svg"
import links from "../../../public/assets/Icons/links.svg"
import message from "../../../public/assets/Icons/message.svg"
import OurVision from "@/components/Cards/OurVision"
const AboutUs = ({employee}) =>{
    console.log(employee)
    const data =[ 
        {
            desc:'يوجد لدينا في المنصه مجموعة من الخبراء الممتازين لديهم الخبرة الكافيه للتطور وتطوير خبراتكومصداقية  نقدم افضل الدورات التدريبية',
            text:'قيمنا',
            icon:links        
        },
        {
            text:'رسالتنا',
            desc:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يود تيمبوبنتنتنتلوريم ايبسوم دولار سيت يمبوط',
            icon: message            
        },
        {
            text:'رؤيتنا',
            desc:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يود تيمبوبنتنتنتلوريم ايبسوم دولار سيت يمبوط',
            icon:vision            
        }
    ]

    return(
        <div>
            <div className={`text-white max-md:h-[273.9px] max-lg:h-[365.25px] h-[487px] w-full ${styles.container}`}>
                <p className="text-right font-[ar-bold] text-[30px] relative max-md:top-[122px] max-lg:top-[162.75px] top-[217px] right-[4.9vw] lg:text-[45px] ">عن منصتنا</p>
            </div>
            <p className="text-[#142431] mb-[72px] text-[24px] font-[ar-meduim] text-right mt-[30px] mr-[5.4vw]">الرئيسية</p>
            <div className="flex  h-auto flex-wrap justify-center items-center w-full mb-[15px] max-[514px]:flex-col ">
                {data.map(item=>(
                    <div key={item.text} className="our-vision-card max-lg:mb-4 rounded-[29px] overflow-hidden min-w-[240px] min-h-[300px] w-[23.3vw] h-[23.3vw] max-[514px]:mr-0 mr-[3.4vw]">
                        <OurVision data={item}/>
                    </div>
                ))}         
            </div>
            <MiddleSection/>
            <Offers/>
            <TeamWork data={employee}/>
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_ALL_EMPLOYEES}?lang=en&limit=10&page=1`)
    const employee = await res.json()
    return {props:{employee}}
}

export default AboutUs