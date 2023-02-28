import { useSelector } from "react-redux"

const LoadingLayout = ({children,text}) =>{
    const {loadingStatus} = useSelector(state =>state.loading)
    console.log(text)
    return(
        <div className="w-full h-auto">
            <div id="loading-wrapper" className={`${loadingStatus?"block":"hidden"}`}>
                <div id="loading-content"></div>
            </div>
            <main className={`${!loadingStatus?"block":"hidden"}`}>{children}</main>
        </div>
    )
}
export default LoadingLayout