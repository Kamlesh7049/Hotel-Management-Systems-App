import Footer from "./components/Footer"
import Header from "./components/Header"

import {Outlet} from "react-router-dom"


const Layout=()=>{
    return(
        <>
        <Header/>
        <center>
            <Outlet/>
        </center>
        <Footer/>
        </>
    )
}
export default Layout ;