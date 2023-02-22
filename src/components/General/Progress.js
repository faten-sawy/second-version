

const Progress = ({percent}) =>{
    console.log(percent)
    return(
        <div className="w-[19.7vw] max-lg:w-[30vw] bg-[#7070705c] h-[2px] rounded-3xl">
            <span className={`inline-block bg-[#007394] h-[2px] w-[${percent}] mb-[20px]`}></span>
        </div>

    )
}
export default Progress