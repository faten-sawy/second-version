
import {BsPerson} from "react-icons/bs"
import {TbCertificate} from "react-icons/tb"


const Offers = () => {
    return(
        <div className="text-center m-4">
            <h3 className="font-bold my-4">منصتنا تقدم لك</h3>
            <p>منصتنا تقدم لك نصتنا تنصتنا تنصتنا تنصتنانا تقدم لك نصتنا تنصتنا تنصتنا تنصتنا ت تنصتنا ت</p>
            <div className="flex justify-between items-center m-8 max-[378px]:m-4  max-[378px]:flex-wrap">
                <div className="flex flex-col items-center max-[378px]:w-[49%] mb-4" >
                    <span className="text-center flex justify-center items-center w-[50px] h-[50px] bg-blue-100 rounded-[50%]"><TbCertificate className="w-full h-8"/></span>
                    <p className="mt-4">دوات تديبيه</p>
                </div>
                <div className="flex flex-col items-center max-[378px]:w-[49%] mb-4" >
                    <span className="text-center flex justify-center items-center w-[50px] h-[50px] bg-blue-100 rounded-[50%]"><TbCertificate className="w-full h-8"/></span>
                    <p className="mt-4">مساات</p>
                </div>
                <div className="flex flex-col items-center max-[378px]:w-[49%] mb-4" >
                    <span className="text-center flex justify-center items-center w-[50px] h-[50px] bg-blue-100 rounded-[50%]"><TbCertificate className="w-full h-8"/></span>
                    <p className="mt-4">معفة مجانية</p>
                </div>
                <div className="flex flex-col items-center max-[378px]:w-[49%] mb-4" >
                    <span className="text-center flex justify-center items-center w-[50px] h-[50px] bg-blue-100 rounded-[50%]"><TbCertificate className="w-full h-8"/></span>
                    <p className="mt-4">شهادات</p>
                </div>
            </div>
        </div>
    )
}

export default Offers