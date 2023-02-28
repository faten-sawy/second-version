import {BsPerson} from "react-icons/bs"
import FeatureList from "../General/FeatureList"
import styles from "../../styles/Home.module.css"

const MiddleSection = () =>{
    return(
        <div className="flex flex-row-reverse mb-[72px] min-h-[736px] justify-between ml-[7.9vw] mr-[6.25vw] max-md:flex-col-reverse max-md:items-end">        
            <iframe 
                className="rounded-2xl pl-4 w-[50%] max-md:mt-8 h-[547px] max-md:w-full max-md:h-[300px] 5xl:mt-[115px]"
                    src="https://www.youtube.com/embed/M3aCFWk8S1E" 
                title="الاجتماع السنوي  لشركة بلان بي" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <div className="w-[50%] pr-4 lg:w-[50%] max-lg:pr-8 max-md:w-full 5xl:mt-[120px] 5xl:mb-[120px]">
                <h3 className="text-[#007394] text-right text-[16px] lg-text-[14.74px] lg:mb-[22.78px]  2xl:text-[22px] font-[ar-meduim] 2xl:mb-[34px]  ">عن منصتنا</h3>
                <h2 className="text-[#142431] w-full text-right   text-[20px]  lg:text-[17.2px] 2xl:text-[32px] font-[ar-bold] 2xl:w-[647px]">طور مهاراتك ، تعلم شيء جديد ، وتنمو الخاص بك مهارات من أي مكان في العالم</h2>
                <p className="text-[#142431] text-right lg:mt-[44.52px] mb-4 text-[14px] lg:text-[13.4px] lg:mb-[29.48px] 2xl:text-[20px] font-[ar-regular] 2xl:mb-[44px]">إلهامك وتمكينك من تحقيق أهدافك المهنية والشخصية في التعلم والتطوير من خلال تزويدك بالمعرفة والخبرة التي يتمتع بها كبار الموجهين والمدربين</p>
                <FeatureList lang="ar"/>
                <button className={`${styles.list_button} float-right mt-4 h-[44px] w-[170px] text-white rounded-xl lg:h-[52.26px] lg:w-[187.6px] lg:text-[14.74px] 2xl:h-[78px] 2xl:w-[280px] 2xl:text-[22px] font-[ar-meduim] `}>
                    تعلم الآن
                </button>          
            </div>
            
        </div>
    )
}
export default MiddleSection