import Ourdesign from "./Ourdesign"

const Ourcollection = () => {

    const collection = [
        {
            name: "Designer Delights Collection",
            img: "../public/Ourcollection/collection.png",
        },
        {
            name: "Travel Essentials Collection",
            img: "../public/Ourcollection/collection1.png",

        },
        {
            name: "Special Occasions Collection",
            img: "../public/Ourcollection/collection2.png",

        },
        {
            name: "Seasonal Sensations Collection",
            img: "../public/Ourcollection/collection3.png",

        },
        {
            name: "Vintage Treasures Collection",
            img: "../public/Ourcollection/collection4.png",

        },
        {
            name: "Limited Edition Treasures",
            img: "../public/Ourcollection/collection5.png",

        },
        {
            name: "Modern Classics Collection",
            img: "../public/Ourcollection/collection6.png",

        },

    ]

    return (
        <>

            <div className="bg-black">

                <div className="grid md:grid-cols-2 grid-cols-1 gap-24 p-4  justify-self-center  md:w-[1000px]">


                    {
                        collection.map((i) => {
                            return (
                                <>
                                    <div>
                                        <div className="relative flex">

                                            <img src={i.img} alt="" className="relative" />
                                            <h1 className="absolute bottom-1 justify-self-center z-10 ... text-white text-[20px] justify-self-center ml-10">{i.name}</h1>

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
export default Ourcollection