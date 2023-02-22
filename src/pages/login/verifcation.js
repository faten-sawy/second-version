import { useEffect } from "react"
import instractor from "../../assets/Images/instractor.jpg"
import Image from "next/image"
const VerificationCode = () =>{

    const KEYBOARDS = {
        backspace: 8,
        arrowLeft: 37,
        arrowRight: 39,
      }
    
    useEffect(()=>{
        document.addEventListener('keydown' ,(e)=>{
            switch(e.keyCode) {
                case KEYBOARDS.backspace:
                  handleBackspace(e)
                  break
                case KEYBOARDS.arrowLeft:
                  handleArrowLeft(e)
                  break
                case KEYBOARDS.arrowRight:
                  handleArrowRight(e)
                  break
                default:  
            }
        })
    },[])
    const handleBackspace = (e) => { 
        const input = e.target
        if (input.value) {
          input.value = ''
          return
        }
        
        input.previousElementSibling.focus()
    }

    const handleArrowLeft = (e) => {
    const previousInput = e.target.previousElementSibling
    if (!previousInput) return
    previousInput.focus()
    }

    const handleArrowRight = (e) => {
    const nextInput = e.target.nextElementSibling
    if (!nextInput) return
    nextInput.focus()
    }
    const  handleInput =(e)=> {
        const input = e.target
        const nextInput = input.nextElementSibling
        if (nextInput && input.value) {
          nextInput.focus()
          if (nextInput.value) {
            nextInput.select()
          }
        }
        /* handle arrow left */
        const previousInput = e.target.previousElementSibling
        if (!previousInput) return
        previousInput.focus()
    }
    const handleSubmit = () =>{

        let code = ''
        var elements = document.querySelectorAll('.form-control')

        elements.forEach(element => {
           code+=element.value        
        });
        console.log(code.length)

    }

    return(
        <div className="flex flex-row-reverse justify-end">
            <div className="w-[50%]">
                <Image src={instractor} alt= "instractor Img" className="w-[90%] ml-[10%]"/>
            </div>
            <div className="w-[50%] flex flex-col items-end">
                <p className="font-bold">تحقق من بيدك الالكتوني لاسال الكود</p>
                <p>لقد أسلنا الي بيدك كود يحتوي علي 6 اقام ادخل الكود أدناه</p>
            <form className="w-[400px]">
            <h4 class="text-center mb-4">Enter your code</h4>
            <div class="flex mb-3">
                <input onChange={(e)=>handleInput(e)} type="tel" maxLength="1"  className="form-control"/>
                <input onChange={(e)=>handleInput(e)} type="tel" maxLength="1"  className="form-control"/>
                <input onChange={(e)=>handleInput(e)} type="tel" maxLength="1"  className="form-control"/>
                <input onChange={(e)=>handleInput(e)} type="tel" maxLength="1"  className="form-control"/>
                <input onChange={(e)=>handleInput(e)} type="tel" maxLength="1"  className="form-control"/>
                <input onChange={(e)=>handleInput(e)} type="tel" maxLength="1"  className="form-control"/>
            </div>
            <button onClick={handleSubmit} class="w-full bg-blue-300">اسال</button>
        </form>

            </div>
            </div>
       
        )
}
export default VerificationCode