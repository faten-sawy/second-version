import axios from "axios"
import { useEffect, useState } from "react"
import styles from "../../styles/Home.module.css"
import CheckBox from "../CheckBox"
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from "react-icons/md"
import { useDispatch } from "react-redux"
import { SET_LOADING } from "@/redux/reducers/loading"
const Filter = ({passFilterdItems,typeId}) =>{
    const [categories,setCategories] = useState([])
    const [flagFilter,setFlagFilter] = useState(false)
    const [filterStyle,setFilterStyle] = useState("hidden")
    const [filterMobileStyle,setFilterMobileStyle] = useState("w-0 px-0")
    const [filterItems,setFilterItems] = useState([])
    const [clearFlag,setClearFlag] = useState(false)
    const [unchecked,setUnchecked] = useState(false)
    const [lang,setLang] = useState([])
    const dispatch = useDispatch()
   
    const period = [
        {
            name:"ألكل"
        },
        {
            name:"دورة قصيرة(ساعة-ساعتين)"
        },
        {
            name:"دورة متوسطة(10-20)ساعة"
        }
    ]
    const order = [
        {
            name:"الأحدث"
        },
        {
            name:"الأقدم"
        },
        {
            name:"الأعلي سعرا"
        },
        {
            name:"الأقل سعرا"
        },
        {
            name:"الأعلي مشاهدة"
        }
    ]

    

    const [data,setData] = useState({
        categoryid:[],
        duration:"",
        langid:[],
        ordaring:""
    })

    useEffect(()=>{
        axios.get('https://test2.plan-b-eg.com/api/Courses/GetAllCategories?lang=ar').then(res=>{
            setCategories(res.data)
            })
            axios.get('https://test2.plan-b-eg.com/api/NewsSliderController/getlanguage').then(res=>{
                setLang(res.data)
            })
    },[])

    const addFilterItem = (data) =>{
        setClearFlag(false)
        switch (data.action){
            case "remove": {
                const dataAfterFilter = filterItems.filter((item)=>item.value !== data.value)
               setFilterItems(dataAfterFilter)
               handleFilterdItem("remove",data.type)
               break;

            }
            case "add": {
                setFilterItems([...filterItems,data])
                handleFilterdItem("add",data.type)
                break;
            }
        }
    }
    const handleFilterdItem = (type,dataPassed)=> {

        const{type:itemType,id,name} = dataPassed

        if(type === "remove"){
            switch(itemType){
                case "category":{
                    const dataAfterFilter =  data.categoryid.filter(item=> item!==id)
                    setData({...data,categoryid:dataAfterFilter})
                    break;
                }
                case "lang": {
                    const dataAfterFilter = data.langid.filter(item => item !== id)
                    setData({...data,langid:dataAfterFilter})
                    break;
                }
                case "duration":{
                    setData({...data,duration:""})
                    break;
                }
                case "order":{
                    setData({...data,ordaring:""})
                    break;
                }
            }
        }
        else if( type === "add"){
            switch(itemType){
                case "category":{
                    setData({...data,categoryid:[...data.categoryid,id]})
                    break;
                }
                case "lang": {
                    setData({...data,langid:[...data.langid,id]})
                    break;
                }
                case "duration" :{
                    setData({...data,duration:name})
                    break;
                }
                case "order": {
                    setData({...data,ordaring:name})
                    break;
                }
            }
        }

    }

    const handleSubmit = (type,e) =>{
        dispatch(SET_LOADING(true))

        e.preventDefault()     
        switch(type){
            case "setFilter" : {
                const sendingData = {
                    categoryid:data.categoryid,
                    duration:data.duration,
                    langid: data.langid,
                    ordaring:data.ordaring,
                    courstypeid:typeId || 3
                }
                const sendingData2 = {
                    categoryid:[3],
                    duration:"",
                    langid:[],
                    ordaring:"",
                    courstypeid:3
                }
                console.log({sendingData},{sendingData2})
                
                // POST filterItems
                axios.post(`${process.env.NEXT_PUBLIC_FILTER}?lang=en`,sendingData).then(res=>{
                    console.log("Data",res.data)
                    passFilterdItems(res.data)
                })
                setFilterStyle("hidden")
                setFilterMobileStyle("w-0 px-0")
                window.scrollTo(0, 0)
                break;
            }
            case "clearFilter" : {
                setClearFlag(true)
                setFilterItems([])
                dispatch(SET_LOADING(false))
                setFilterStyle("hidden")
                setFilterMobileStyle("w-0 px-0")
                window.scrollTo(0, 0)

            }
        }

    }

    const handleRemove = (data) =>{
        setUnchecked(data.value)
        setFilterItems(filterItems.filter((item)=>item.value !== data.value))
    }
    const handleOpenFilter = () =>{
        if(!flagFilter){
            setFilterStyle("block")
            setFilterMobileStyle("w-[280px] px-4")
        }
        else{
            setFilterStyle("hidden")
            setFilterMobileStyle("w-0 px-0")
        }
        setFlagFilter(!flagFilter)
        
    }

    return(
        <div className="">
            {/*TOP PART*/}
            <div className="top-section w- 5xl:top-[105px] 5xl:min-h-[127px] 5xl:w-[1594px] ">
                <div className="flex flex-col">
                   
                    <div className="flex justify-between mb-4 mt-4">
                        <button onClick={handleOpenFilter} className=" flex items-center justify-between border border-[#2B2E30] text-right rounded-xl px-[22px] w-[19%] h-[50px] lg:text-[18px] font-[ar-meduim] ">
                            <span>{flagFilter?<MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>}</span>
                            الفلتر</button>
                        <div className="flex flex-wrap justify-end">
                            {filterItems?.map((item)=>(
                                <button className="border mr-2 border-[#009C90] text-[#009C90] bg-[#F7FCFC] rounded-3xl  min-w-[130px] w-auto flex justify-between px-4 h-[30px] items-center md:text-[14.4px] 2xl:text-[20px] 5xl:font-[ar-meduim] 5xl:mb-4 5xl:h-[58px] 5xl:min-w-[162px]">
                                <span className="mr-2" onClick={()=>handleRemove(item)}>X</span>
                                {item.value}
                                </button>
                            ))}                      
                        </div>            
                    </div>
                </div>
            </div>
            
                {/* FILTER PART*/}
            <div className={`max-md:hidden filter-part z-30  max-lg:px-4 px-16 overflow-hidden ${filterStyle} absolute bg-white 5xl:h-[795px] w-[88.3vw] md:py-[40.5px]  2xl:py-[60.5px]`}>
                <div className="flex flex-row-reverse md:mb-[35.175px] 2xl:mb-[52.5px]">
                    <div className="w-[25.4%] border-l border-[#D6D6D6] pr-[4.7%] max-lg:pr-[1.525%]">
                        <p className="text-right  max-md:text-[18.76px] 2xl:text-[28px] font-[ar-bold] max-md:mb-[30.8px] 2xl:mb-[46px]">الفئات</p>
                        {categories?.map((item)=>(
                            <div key={item.id} className="flex justify-end max-lg:mb-[14.07px] lg:mb-[18.76px] 2xl:mb-[28px]">
                                <li className="list-none text-right mr-2 md:text-[14.4px] 2xl:text-[20px] font-[ar-regular]">{item.name}</li>
                                <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} addFilterItem={addFilterItem} type={{type:"category",id:item.id}} value={item.name} /> 
                            </div>
                        ))}

                    </div>
                    <div className="w-[26.7%] border-l border-[#D6D6D6] pr-[4.7%] max-lg:pr-[1.525%]">
                        <p className="text-right  max-md:text-[18.76px] 2xl:text-[28px] font-[ar-bold] max-md:mb-[30.8px] 2xl:mb-[46px]">المدة</p>
                        {period.map((item)=>(
                            <div key={item.name} className="flex  justify-end  max-lg:mb-[14.07px] lg:mb-[18.76px] 2xl:mb-[28px]">
                                <li className="list-none  flex items-center text-right mr-2 md:text-[14.4px] 2xl:text-[20px] font-[ar-regular]">{item.name}</li>
                                <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} type={{type:"duration",name:item.name}} addFilterItem={addFilterItem} value={item.name}/>
                            </div>
                        ))}
                    </div>
                    <div className="w-[21.6%] border-l border-[#D6D6D6] pr-[4.7%] max-lg:pr-[1.525%]">
                        <p className="text-right  max-md:text-[18.76px] 2xl:text-[28px] font-[ar-bold] max-md:mb-[30.8px] 2xl:mb-[46px]">اللغة</p>
                        {lang.map((item)=>(
                            <div key={item.name} className="flex justify-end max-lg:mb-[14.07px] lg:mb-[18.76px] 2xl:mb-[28px]">
                                <li className="list-none mr-2 md:text-[14.4px] 2xl:text-[20px] font-[ar-regular]">{item.name}</li>
                                <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} type={{type:"lang",id:item.id}} addFilterItem={addFilterItem} value={item.name}/>
                            </div>
                        ))}
                    </div>
                    <div className="pr-[4.7%] max-lg:pr-[1.525%]">
                        <p className="text-right  max-md:text-[18.76px] 2xl:text-[28px] font-[ar-bold] max-md:mb-[30.8px] 2xl:mb-[46px]">ترتيب</p>
                     
                       {order.map((item)=>(
                            <div key={item.name} className="flex justify-end max-lg:mb-[14.07px] lg:mb-[18.76px] 2xl:mb-[28px]">
                            <li className="list-none mr-2 md:text-[14.4px] 2xl:text-[20px] font-[ar-regular]">{item.name}</li>
                            <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} type={{type:"order",name:item.name}} addFilterItem={addFilterItem} value={item.name}/>
                        </div>

                        ))}
                        
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="border border-[#009C90] text-[#009C90] bg-white md:h-[46.9px] 2xl:h-[70px] mr-[2.5%] text-[22px] font-[ar-meduim] w-[28.2%] rounded-2xl" onClick={(e)=>handleSubmit("setFilter",e)}>تطبيق التصفية</button>
                    <button className={`border ${styles.list_button} text-white border-[#009C90] btn  md:h-[46.9px] 2xl:h-[70px] text-[22px] font-[ar-meduim] w-[28.2%] rounded-2xl`} onClick={(e)=>handleSubmit("clearFilter",e)}>مسح التصفية</button>
                </div>
                
            </div>

            {/**FILTER PART IN PHONE SIZE */}
            <div className={` hidden max-md:block mobile-filter z-30  px-4 overflow-hidden  absolute bg-white  ${filterMobileStyle} max-md:py-[20.5px]`}>
                <div className="flex flex-col flex-wrap items-start md:mb-[35.175px] 2xl:mb-[52.5px]">
                    <div className="w-[100%] border-b border-[#D6D6D6] py-4 max-lg:pr-[1.525%]">
                        <p className="text-right  max-md:text-[18.76px]  font-[ar-bold] max-md:mb-[30.8px] ">الفئات</p>
                        {categories?.map((item)=>(
                            <div key={item.id} className="flex justify-end max-lg:mb-[14.07px] lg:mb-[18.76px] 2xl:mb-[28px]">
                                <li className="list-none text-right mr-2 md:text-[14.4px] 2xl:text-[20px] font-[ar-regular]">{item.name}</li>
                                <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} addFilterItem={addFilterItem} type={{type:"category",id:item.id}} value={item.name} /> 
                            </div>
                        ))}

                    </div>
                    <div className="w-[100%] border-b border-[#D6D6D6] py-4 max-lg:pr-[1.525%]">
                        <p className="text-right  max-md:text-[18.76px] 2xl:text-[28px] font-[ar-bold] max-md:mb-[30.8px] 2xl:mb-[46px]">المدة</p>
                        {period.map((item)=>(
                            <div key={item.name} className="flex  justify-end  max-lg:mb-[14.07px] lg:mb-[18.76px] 2xl:mb-[28px]">
                                <li className="list-none  flex items-center text-right mr-2 md:text-[14.4px] 2xl:text-[20px] font-[ar-regular]">{item.name}</li>
                                <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} type={{type:"duration",name:item.name}} addFilterItem={addFilterItem} value={item.name}/>
                            </div>
                        ))}
                    </div>
                    <div className="w-[100%] border-b border-[#D6D6D6] py-4 max-lg:pr-[1.525%]">
                        <p className="text-right  max-md:text-[18.76px] 2xl:text-[28px] font-[ar-bold] max-md:mb-[30.8px] 2xl:mb-[46px]">اللغة</p>
                        {lang.map((item)=>(
                            <div key={item.name} className="flex justify-end max-lg:mb-[14.07px] lg:mb-[18.76px] 2xl:mb-[28px]">
                                <li className="list-none mr-2 md:text-[14.4px] 2xl:text-[20px] font-[ar-regular]">{item.name}</li>
                                <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} type={{type:"lang",id:item.id}} addFilterItem={addFilterItem} value={item.name}/>
                            </div>
                        ))}
                    </div>
                    <div className="w-[100%] py-4 max-lg:pr-[1.525%]">
                        <p className="text-right  max-md:text-[18.76px] 2xl:text-[28px] font-[ar-bold] max-md:mb-[30.8px] 2xl:mb-[46px]">ترتيب</p>
                        {order.map((item)=>(
                            <div key={item.name} className="flex justify-end max-lg:mb-[14.07px] lg:mb-[18.76px] 2xl:mb-[28px]">
                            <li className="list-none mr-2 md:text-[14.4px] 2xl:text-[20px] font-[ar-regular]">{item.name}</li>
                            <CheckBox test={unchecked === item.name ?true:false}  clearFlag={clearFlag} type={{type:"order",name:item.name}} addFilterItem={addFilterItem} value={item.name}/>
                        </div>

                        ))}
                    </div>
                </div>
                <div className="flex justify-center flex-col">
                    <button className="border border-[#009C90] text-[#009C90] bg-white md:h-[46.9px] 2xl:h-[70px] mb-4 mr-[2.5%] max-md:text-[18.5px] text-[22px] font-[ar-meduim] w-[100%] rounded-2xl" onClick={(e)=>handleSubmit("setFilter",e)}>تطبيق التصفية</button>
                    <button className={`border ${styles.list_button} text-white border-[#009C90] btn  md:h-[46.9px] 2xl:h-[70px] max-md:text-[18.5px] text-[22px] font-[ar-meduim] w-[100%] rounded-2xl`} onClick={(e)=>handleSubmit("clearFilter",e)}>مسح التصفية</button>
                </div>
                
            </div>
        </div>
    )
}
export default Filter