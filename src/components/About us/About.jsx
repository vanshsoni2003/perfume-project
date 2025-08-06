import Makesuniue from "./Makesuniue"
import Ourstory from "./Ourstory"

const About =()=>{

    return(
        <>
            <div className="">
                <div className="relative md:h-[615px] md:w-[1521px]">

                    <img src="../public/Aboutus/Group 4 (2).png" alt="" className="md:h-[617px] md:w-[1521px]"/>

                    <div className="absolute  place-content-center text-center top-0 z-10 ... text-[white] md:w-[700px] m-auto  md:h-[615px] md:w-[1521px] ">
                        <div className=" m-auto md:w-[800px]">
                            <h1 className="md:text-[40px]">About us</h1>
                            <p className="text-balance mt-8">At Local Face, we believe that perfumes are more than just scents; they are expressions of one's individuality and style. Our passion for exquisite fragrances led us to curate a collection that captures the essence of diverse personalities, bringing you an unparalleled olfactory experience</p>
                        </div>
                    </div>

                </div>
            </div>
            <Ourstory/>
            <Makesuniue/>
        </>
    )

}

export default About