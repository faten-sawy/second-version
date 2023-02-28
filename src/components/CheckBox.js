import { useEffect, useState } from "react"


const CheckBox = ({addFilterItem,value,clearFlag,test,type}) =>{
    const [isChecked,setIsChecked] = useState(false)

    useEffect(()=>{
        if(clearFlag){
            setIsChecked(false)
        }

    },[clearFlag])

    useEffect(()=>{
        if(test === true){
            setIsChecked(false)
        }
    },[test])

    const handleChecked = (e) =>{
        passValues(e.target.value)
        setIsChecked(!isChecked)
    }
    const passValues = (value) =>{
        isChecked ? addFilterItem({value:value,action:"remove",type}) : addFilterItem({value:value,action:"add",type})  
    }


    return(
        <label class="checkbox 5xl:w-[33px] max-5xl:w-[28px] max-5xl:h-[28px] [200px] 5xl:h-[33px]">
            <input type="checkbox" onChange={(e)=>handleChecked(e)} value={value} checked={isChecked} className=" w-full h-full  checked:bg-[#009C90]" />
            <div class="check"></div>
        </label>
    )
}
export default CheckBox