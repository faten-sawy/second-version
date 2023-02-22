
import NewsSlider from "../Sliders/NewsSlider"
const News = ({news}) =>{
    console.log(news)
    return(
        <div className="md:h-[593px]  max-lg:h-[839.43px] max-md:h-[739.43px] xl:h-[1119.24px]">
            <NewsSlider data={news}/>
        </div>
    )
}

export default News