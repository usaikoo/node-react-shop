import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = ({children}) =>{
    return (
        <>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;