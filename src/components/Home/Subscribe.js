
import bg from "public/assets/Images/general/Group 102432.png"
import styles from "../../styles/Home.module.css"
import SocialList from "../General/SocialList"
const Subscribe = () =>{

    return(
        <div className="flex justify-center relative  h-[182.91px]  2xl:h-[273px]">
            <div className={`${styles.subscribe_container} flex w-[91.5vw] pb-16   h-[231.82px] 2xl:h-[346px] `}>
                <div className="flex justify-between  max-sm:justify-center w-full relative max-md:top-[15%] max-2xl:top-[30%] mx-8 2xl:mt-[91px]">
                    <div className="w-[46vw] max-sm:w-[100%] max-sm:flex max-sm:flex-col max-sm:items-center max-md:w-[40vw]">
                        <h2 className="text-white max-2xl:text-[30px] max-lg:text-[24.6px] lg:text-[30.15px] 2xl:text-[45px] font-[en-meduim] ">Subscribe To Our Newsletter</h2>
                        <div className="flex max-sm:items-center max-md:flex-col mt-2 lg:mt-[24.79px] 2xl:mt-[37px]">{/**w-[356px] 2xl:w-[656px] lg:w-[339.52px] */}
                            <input placeholder="Enter Your mail" className={`w-[34vw] max-md:h-[40px] max-md:w-[40vw] outline-none text-[#01163F] px-4   placeholder:text-[12px] h-[50.25px] 2xl:h-[75px] rounded-[200px]  lg:placeholder:text-[13px]  2xl:placeholder:text-[20px] lg:px-[23.45px] 2xl:text-[20px] font-[en-regular] 2xl:px-[35px]`}/>
                            <button className="ml-[25px] max-sm:w-[30vw] max-sm:ml-0 max-md:w-[16vw] max-md:h-[40px] max-md:mt-[20px] w-[10.7vw]  lg:h-[50.25px] bg-[#142431] 2xl:h-[75px] rounded-3xl text-white 2xl:text-[24px] font-[en-regular] 2xl:rounded-[50px] ">Subscribe</button>
                        </div>
                    </div>
                    <div className=" max-sm:hidden w-[17.3vw] max-lg:w-[20vw] max-md:w-[30vw]">
                        <p className="text-white max-2xl:text-[30px] max-lg:text-[21.1px] lg:text-[28.14px] lg:mb-[9.514px] 2xl:text-[42px] font-[en-bold] 2xl:mb-[14.2px]">Get In Touch!</p>
                        <SocialList listStyle={`max-2xl:h-[43.55px] max-2xl:w-[43.55px] 2xl:h-[65px] 2xl:w-[65px]`} iconStyle={`max-2xl:w-[17.42px] max-2xl:h-[17.42px] 2xl:h-[26px] 2xl:w-[26px]`} color="white" listSize="65px" iconSize="26px"/>
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default Subscribe