
import FeatureCard from "@/components/Cards/Features"
import MiddleSection from "@/components/AboutUs/MiddleSection"
import Offers from "@/components/AboutUs/Offers"
import TeamWork from "@/components/AboutUs/TeamWork"

const AboutUs = () =>{
    const data =[ 
        {
            desc:'لوريمتيمبولوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايب ,كونسيكتيتور أدايبا يود تيمبوط',
            text:'قيمنا'        
        },
        {
            text:'سالتنا',
            desc:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يود تيمبوبنتنتنتلوريم ايبسوم دولار سيت يمبوط',
            
        },
        {
            text:'ؤيتنا',
            desc:'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يود تيمبوبنتنتنتلوريم ايبسوم دولار سيت يمبوط',            
        }
    ]
    return(
        <div>
            <div className="text-white h-[300px] w-full bg-[url('https://static.aviva.io/content/dam/aviva-public/gb/images/personal/illustrations/contact-pages/hero-illustration-contact-us-primary-teal-bg_2880x1620px.$common_hero_desktop$.png?$common_hero_desktop$')]">
                <p className="text-right relative right-24 top-32 font-bold text-[30px]">عن منصتنا</p>
            </div>
            <div className="flex h-auto flex-wrap justify-center w-full">
                {data.map(item=>(
                    <div key={item.text} className="bg-[red] w-[300px] m-4 min-h-[300px] h-auto">
                        <FeatureCard data={item}/>
                    </div>
                ))}
                
            </div>
            <MiddleSection/>
            <Offers/>
            <TeamWork/>
        </div>
    )
}

export default AboutUs