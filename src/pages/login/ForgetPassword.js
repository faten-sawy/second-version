import Image from "next/image"
import { useState } from "react"
import instractor from "../../assets/Images/instractor.jpg"
const ForgetPassword = ()=>{
    const [email,setEmail] = useState("")
    
    const handleSubmit = () =>{
        /* SEnd Email to Back-End */

    }
    const setUserEmail = (e) =>{
        setEmail(e.target.value)
    }
    return(
        <div className="flex flex-row-reverse">
            <div className="w-[50%]">
                <Image src={instractor} alt= "instractor Img" className="w-[90%] ml-[10%]"/>
            </div>
            <div className="w-[50%]">
            <p className="text-right">نسيت كلمة المو ؟</p>
            <p className="text-right">أدحل كلمة البيد الالكتوني لكي تعيد كلمة المو</p>
            <div className="text-right my-4 " >
                <form className=" py-4">
                    <div className="input-container my-4">
                        <label className="my-3 inline-block">البيد الالكتوني </label>
                        <input onChange={(e)=>setUserEmail(e)} value={email} type="text"  className="bg-[white] rounded-lg  h-8  text-right p-4 rounded-l  w-full border border-[gray]"  />
                    
                    </div>
                </form>
                <button className="w-full text-center border border-[gray] h-8 rounded-lg" onClick={handleSubmit}>اسال</button>
            </div>
            </div>
        </div>
    )
}
export default ForgetPassword