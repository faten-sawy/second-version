import { useState } from "react"
import Link from "next/link"
import {BsEye,BsEyeSlash} from "react-icons/bs"

const SignupForm = () =>{
    const [flag,setFlag] = useState(false)
    const [form,setForm] = useState({
        email:"",
        password:"",

    })

    const setFormData = (e,type) =>{
        switch (type) {
            case "email":
                setForm({...form,email:e.target.value})
                break;
            case "password":
                setForm({...form,password:e.target.value})
        }
         


    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(form)
    }
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}  className="border-b border-[gray] py-12">
                <div className="input-container my-4">
                    <label className="my-3 inline-block">البيد الالكتوني </label>
                    <input required onChange={(e)=>setFormData(e,"email")} value={form.email} type="text"  className="bg-[white]  h-8  text-right p-4 rounded-l  w-full border border-[gray]"  />
                </div>
                <div className="input-container my-4">
                    <label className="my-3 inline-block">كلمة المو </label>
                    <div className="flex items-center">
                      {!flag ?
                       <BsEye className="relative left-7 cursor-pointer" onClick={()=>setFlag(!flag)}/> :
                       <BsEyeSlash className="relative left-7 cursor-pointer" onClick={()=>setFlag(!flag)}/>
                      }
                   
                      <input required onChange={(e)=>setFormData(e,"password")} value={form.password} type={flag ? "text":"password"} className="border bg-[white]  h-8  text-right p-4 rounded-l w-full border-[gray]" />
                     
                    </div>
                    
                </div>
                <div className="w-full border flex justify-center items-center border-[gray] text-center bg-green-200 rounded-l h-[40px]">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default SignupForm