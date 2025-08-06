import Servicesection from "./Servicesection"

const Services = ()=>{

    return(
        <>
          <div className="">
                <div className="relative md:h-[615px] md:w-[1521px]">

                    <img src="../public/Services/Group 4 (3).png" alt="" className="md:h-[617px] md:w-[1521px]"/>

                    <div className="absolute  place-content-center text-center top-0 z-10 ... text-[white] md:w-[700px] m-auto  md:h-[615px] md:w-[1521px] ">
                        <div className=" m-auto md:w-[800px]">
                            <h1 className="md:text-[40px]">Our Services</h1>
                            <p className="text-balance mt-8">At Local Face, we are dedicated to providing you with a delightful and immersive perfume shopping experience. Our services are tailored to ensure that you find the perfect fragrance that complements your unique personality and style. We take pride in offering a range of services that go beyond just selling perfumes, aiming to make your journey with us truly special.</p>
                        </div>
                    </div>

                </div>
            </div>

            <Servicesection/>
        </>
    )

}
export default Services