import Image from "next/image"
import instractor from "../../assets/Images/instractor.jpg"
import LoginForm from "@/components/Forms/LoginForm"
const Login = () =>{
    return(
        <div className="flex flex-row-reverse justify-end">
            <div className="w-[50%]">
                <Image src={instractor} alt= "instractor Img" className="w-[90%] ml-[10%]"/>
            </div>
            <div className="w-[50%]">
                <p className="text-right font-bold">! أهلا بك مة أخي</p>
                <p className="text-right">أدخل بياناتك لتسجيل الدخول</p>
                <LoginForm/>

            </div>
        </div>

    )
}
export default Login