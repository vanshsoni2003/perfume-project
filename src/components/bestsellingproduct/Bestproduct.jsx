import { useState } from "react"
import Design from "./Design"

const Bestproduct =()=>{

    const product = [
        {
            name: "rddrfwef",
            price: "220",
            img: '../public/bestproductselling/bestproduct.png'
        },
        {
            name: "The Golden Legacy",
            price: "500",
            img: '../public/bestproductselling/bestproduct2.png'

        },
        {
            name: "Luxurious Elixir",
            price: "800",
            img: '../public/bestproductselling/bestproduct3.png'

        },
        {
            name: "Luxurious Elixir",
            price: "800",
             img: '../public/bestproductselling/bestproduct4.png'

        },
    ]



        return(
            <>  
                <div className="bg-black h-[1600px] md:h-[600px]">    

                    <div className="p-8">

                    <h1 className="justify-self-center text-[20px] "> <b className="text-white"> Best selling product </b> </h1>
                    </div>

                    <div className="text-white md:flex md:justify-self-center md:gap-14 grid grid-cols-1 justify-self-center gap-85  w-[200px] md:mr-[1000px]">

                        {
                            product.map((i)=>{
                                return(
                                    <>
                                   <div>

<div className="relative md:h-[442px] md:w-[260px] bg-black mt-4">

    <img src="../public/Ourvalues/Vector (4).png" alt="" className="absolute md:h-[400px] md:w-[300px] left-0  "/>
    <img src="../public/Ourvalues/Vector (4).png" alt="" className="absolute md:h-[300px] md:w-[1000px] top-[90px] "/>

    <div className="absolute text-white" >
        <img src={i.img} alt=""  className=" md:h-[350px]"/>
        <h2 className="justify-self-center">{i.name}</h2>
        <p className="text-[#AB572D] justify-self-center">{i.price} <span className="text-white">100ml</span></p>

    </div>

</div>

</div>
                                  </>
                                )

                            })
                        }
                        

                    </div>

                </div>  


            </>
        )

}
export default Bestproduct