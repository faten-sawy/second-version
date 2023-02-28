import NavBar from "./NavBar"
import Footer from "./Footer"
import Header from "./Header"
import { useSelector,useDispatch } from "react-redux"
import { SET_LOADING } from "@/redux/reducers/loading"

const Layout = ({children})=>{
    const {loadingStatus} = useSelector((state)=>state.loading)
    const dipatch = useDispatch()

    const handleChanging = () =>{
        dipatch(SET_LOADING(!loadingStatus))
    }
    return(
        <>
        <NavBar />
        <Header/>
        <div className="relative mt-[93px]">
            <main>{children}</main>
        </div>       
        <Footer/>
        </>

    )
}

export default Layout