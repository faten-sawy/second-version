import {BsPerson} from "react-icons/bs"

const MiddleSection = () =>{
    return(
        <div className="flex flex-row-reverse justify-between p-8 max-md:flex-col-reverse max-md:items-end">
            
            <iframe 
                className="rounded-2xl  w-[48%] h-auto max-md:w-full max-md:h-[300px]"
                    src="https://www.youtube.com/embed/M3aCFWk8S1E" 
                title="الاجتماع السنوي  لشركة بلان بي" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <div className="w-[48%] max-md:w-full text-right flex flex-col items-end">
                <p className="text text-blue-500">عن منصتنا</p>
                <h2 className="font-bold text-[1.5em]">طو مهااتك, تعلم شئ جديد, وتنمو الخاص بك مهاات من أي مكان في العالم</h2>
                <p className="my-4 w-[90%] float-right">
                مهااتك, تعلم شئ جديد, وتنمو الخاص بك مهاات من أي مكان في العالممهااتك,  تعلم شئ جديد, وتنمو الخاص بك مهاات من أي مكان في العالممهااتك, تعلم شئ جديد, وتنمو الخاص بك مهاات من أي مكان في العالم
                    
                </p>
                <div className="flex flex-wrap max-[444px]:flex-col max-[444px]:w-full">
                    <li className="list-none flex flex-row-reverse items-center w-[50%] mb-4 max-[444px]:w-full ">
                        <span className=" bg-blue-300 w-8 ml-4  rounded-[100%] h-8 flex justify-center items-center">
                            <BsPerson className=""/>
                        </span>
                        
                        الوصول مدي الحياة
                    </li>
                    <li className="list-none flex flex-row-reverse items-center w-[50%] mb-4 max-[444px]:w-full ">
                        <span className=" bg-blue-300 w-8 ml-4  rounded-[100%] h-8 flex justify-center items-center">
                            <BsPerson className=""/>
                        </span>
                        
                        مدبين خباء
                    </li>
                    <li className="list-none flex flex-row-reverse items-center w-[50%] mb-4 max-[444px]:w-full ">
                        <span className=" bg-blue-300 w-8 ml-4  rounded-[100%] h-8 flex justify-center items-center">
                            <BsPerson className=""/>
                        </span>
                        
                        تطوي اتي للمنصة
                    </li>
                    <li className="list-none flex flex-row-reverse items-center w-[50%] mb-4 max-[444px]:w-full ">
                        <span className=" bg-blue-300 w-8 ml-4  rounded-[100%] h-8 flex justify-center items-center">
                            <BsPerson className=""/>
                        </span>
                        
                        تعلم مفتوح ومغلق
                    </li>

                </div>
            </div>
            
        </div>
    )
}
export default MiddleSection