import Footer from "../Footer/Footer"
import Latestarticest from "../Latest articest/Latestarticest"
import Ourvalues from "../OurValues/Ourvalues"
import Ourcollection from "../Ourcollection/Ourcollection"
import Perfumesale from "../Perfumesalepage/Perfumesale"
import Bestproduct from "../bestsellingproduct/Bestproduct"
import Nav from "../navbar/Nav"
import Navbar from "../navbar/Navbar"
import Navtwo from "../navbar/Navtwo"
import Localface from "../secondpage/Localface"

const Home =()=>{

    return(
        <>
    {/* <Navbar/> */}
    <Navtwo/>
    <Localface/>
    <Ourvalues/>
    <Bestproduct/>
    <Ourcollection/>
    <Perfumesale/>
    <Latestarticest/>
    {/* <Footer/> */}
        </>
    )

}
export default Home