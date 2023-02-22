import { useState } from "react"
import Link from "next/link";
import axios from "axios";
import {BsEye,BsEyeSlash} from "react-icons/bs"

import { useCookies } from "react-cookie"
import {parseCookies} from "../../assets/utils/functions"
import {useEffect} from "react"
import SignupForm from "./SignupForm";

const LoginForm = () =>{

    useEffect(()=>{
        window.addEventListener("load", function(){
            window.cookieconsent.initialise({
              "palette": {
                "popup": {
                  "background": "#000"
                },
                "button": {
                  "background": "#f1d600"
                },
              },
              content: {
              header: 'Cookiessss used on the website!',
              message: 'This website uses cookies to ensure you get the best experience on our website.',
              dismiss: 'Got it!',
              allow: 'Allow cookies',
              deny: 'Decline',
              link: 'Learn more',
              href: 'http://google.com',
              close: '&#x274c;',
            }
            })});
    },[])

    const [cookie, setCookie] = useCookies(["user"])
  
    const [form, setForm] = useState({
        email: "",
        password: "",
      });
      const [flag,setFlag] = useState(false)
      const [error,setError] = useState("")


    const handleSubmit = async (e) =>{
        e.preventDefault()

        if (form.password  && form.email ){
          const data ={username:form.email, password:form.password}
         await postData(data)
        }
        else if (!form.password){
          setError("password is required")
        }
        else if (!form.email){
          setError("email is required")
        }
    }
    const postData = async (data) =>{

     await axios.post('https://test2.plan-b-eg.com/api/Account/authenticate',data,{
      
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
        /* 'Content-Type': 'application/javascript', */
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "content-type": "application/json"
        
      }
    }).then(res=>{
        console.log(res)   
          
      })

    }
    const setUserName = (e)=>{
        setForm({...form,email:e.target.value})
    }
    const setPassword = (e)=>{
        setForm({...form,password:e.target.value})
    }

    return (
      /* <SignupForm/> */
        <div className="text-right my-4 " >
            <form onSubmit={handleSubmit} className="border-b border-[gray] py-12">
                <div className="input-container my-4">
                    <label className="my-3 inline-block">البيد الالكتوني </label>
                    <input required onChange={(e)=>setUserName(e)} value={form.email} type="text"  className="bg-[white]  h-8  text-right p-4 rounded-l  w-full border border-[gray]"  />
                  
                </div>
                <div className="input-container my-4">
                    <div>
                    <label className="my-3 inline-block">كلمة المو </label>
                    <Link href={'/login/ForgetPassword'} className="float-left">نسيت كلمة الس ؟</Link>
                    </div>
                    <div className="flex items-center">
                      {!flag ?
                       <BsEye className="relative left-7 cursor-pointer" onClick={()=>setFlag(!flag)}/> :
                       <BsEyeSlash className="relative left-7 cursor-pointer" onClick={()=>setFlag(!flag)}/>
                      }
                   
                      <input required onChange={(e)=>setPassword(e)} value={form.password} type={flag ? "text":"password"} className="border bg-[white]  h-8  text-right p-4 rounded-l w-full border-[gray]" />
                     
                    </div>
                    
                </div>
                <div className="w-full border flex justify-center items-center border-[gray] text-center bg-green-200 rounded-l h-[40px]">
                    <input type="submit" />
                </div>
            </form>
            <p className="my-4 text-center">
                ليس لديك حساب ؟ <Link href={'/signup'} className="text-[blue] cursor-pointer">انشأ حساب</Link>
            </p>
            <p className="text-center">تم التسجيل بواسطة</p>
            <div className="flex justify-evenly my-4">
                <button className="bg-[blue] text-white h-[40px] px-2 rounded-lg">التسجيل بواسطة فيسبوك</button>
                <button className="bg-[red] text-white h-[40px] px-2 rounded-lg">التسجيل بواسطة جوجل</button>
            </div>
        </div>
    )
}

export default LoginForm

LoginForm.getInitialProps = async ({ req, res }) => {
    const data = parseCookies(req)
  
  if (res) {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        res.writeHead(301, { Location: "/" })
        res.end()
      }
    }
  
    return {
      data: data && data,
    }
  }