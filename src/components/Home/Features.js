
import FeatureCard from "../Cards/Features"
import certificate from "public/assets/Icons/ICONS-10.png"
import online from "public/assets/Icons/ICONS-07.png"
import training from "public/assets/Icons/ICONS-19.png"
import expert from "public/assets/Icons/ICONS-01.png"
 const Features = () =>{
    const dummyData = [{
        text:"International Certification",
        desc:"Our mission is to provide the best, continuously developing arabic educational content, that helps you build your personality and achieve",
        name:"certificate",
        icon: certificate
      },
      {
        text:"International Certification",
        desc:"Our mission is to provide the best, continuously developing arabic educational content, that helps you build your personality and achieve",
        name:"online",
        icon:online
    
      },
      {
        text:"International Certification",
        desc:"Our mission is to provide the best, continuously developing arabic educational content, that helps you build your personality and achieve",
        name:"training",
        icon:training
      },
      {
        text:"International Certification",
        desc:"Our mission is to provide the best, continuously developing arabic educational content, that helps you build your personality and achieve",
        name:"expert",
        icon:expert
      }]
    return( 
        <div className='bg-[#FAFAFA] px-8 flex-wrap relative lg:top-[-0.22px] lg:h-[222.6px] max-5xl:top-[-74px] z-30 w-full flex justify-center 2xl:h-[336px] 5xl:h-[420px] '>
            {dummyData.map((item)=>( 
              <div key={item.name} className="max-sm:w-[100%] max-lg:w-[50%] max-lg:min-h-[220px] mb-4 w-[21.8vw]  relative  lg-h-[240px]  max-5xl:top-[-120px]  2xl:h-[360px]  5xl:h-[420px] 5xl:top-[-220px]">
                <FeatureCard data={item}/>
             </div>
            ))}
      </div>
    )
}
export default Features