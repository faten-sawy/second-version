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
        <input type="checkbox" onChange={(e)=>handleChecked(e)} value={value} checked={isChecked} className=" check 5xl:w-[33px] [200px] 5xl:h-[33px] checked:bg-[#009C90]" />
    )
}
export default CheckBox