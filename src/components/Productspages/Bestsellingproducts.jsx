                       
                                     
import Bestproductselldesign from "./Bestproductselldesign"
import Limittimeoffer from "./Limittimeoffer"
import Specialoffer from "./Specialoffer"
import { add } from "../Reduc/Cartslice"
import { useDispatch } from "react-redux"

const Bestsellingproducts = () => {
    const dispatch = useDispatch();

    const bestselling = [
        // { id: 1, name: "Elixir Noir", title: "Dark and seductive fragrance", price: "$120", image: "/products/product2.png" },
        // ... other products
        { id: 1, name: "Elixir Noir", title: "Dark and seductive fragrance", price: "120", image: "/products/product2.png" },
                { id: 2, name: "Amber Bloom", title: "A floral note with amber warmth", price: "150", image: "/products/product3.png" },
                { id: 3, name: "Citrus Twist", title: "Fresh citrus summer blend", price: "99", image: "/products/product4.png" },
                { id: 4, name: "Velvet Rose", title: "Luxury rose and musk fusion", price: "130", image: "/products/product5.png" },
                { id: 5, name: "Woodland Mist", title: "Earthy tones with a forest finish", price: "110", image: "/products/product6.png" },
                { id: 6, name: "Golden Hour", title: "Rich golden hues and spice", price: "160", image: "/products/product7.png" },
                { id: 7, name: "Ocean Drift", title: "Cool aquatic coastal scent", price: "105", image: "/products/product8.png" },
                { id: 8, name: "Midnight Bloom", title: "Floral notes with nighttime mystery", price: "140", image: "/products/product9.png" },
                { id: 9, name: "Spice Trail", title: "Bold spices with exotic charm", price: "125", image: "/products/product10.png" },
                { id: 10, name: "Sky Essence", title: "Light, airy fragrance for daily wear", price: "95", image: "/products/product2.png" },
                { id: 11, name: "Crimson Charm", title: "Warm red blend with bold tones", price: "135", image: "/products/product11.png" },
                { id: 12, name: "Mystic Bloom", title: "Enchanting floral with a powdery finish", price: "145", image: "/products/product12.png" }
    ];

    const handleadd = (product) => {
        dispatch(add(product));
    };

    return (
        <>
            <div className="bg-black text-white md:h-[1600px]">
                <h1 className="text-center text-[#AB572D] text-[20px]">Best selling product</h1>
                <hr className="md:w-[800px] md:mt-4 justify-self-center text-[#AB572D54]" />
                <div className="grid md:grid-cols-4 gap-6 p-4  md:h-[1550px]">
                    {bestselling.map((product) => (
                        <div key={product.id} className="relative md:h-[442px] md:w-[260px] bg-black mt-4 ml-8">
                            <img src="/Ourvalues/Vector (4).png" alt="" className="absolute md:h-[400px] md:w-[300px] left-0" />
                            <img src="/Ourvalues/Vector (4).png" alt="" className="absolute md:h-[300px] md:w-[1000px] top-[90px]" />

                            <div className="absolute text-white ">
                                <img src={product.image} alt={product.name} />
                                <h2 className="justify-self-center">{product.name}</h2>
                                <div className="flex mt-2 justify-self-center">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <h3 className="mb-1 ml-2">(202)</h3>
                                </div>
                                <p className="text-[#AB572D] justify-self-center">{product.price} <span className="text-white">100ml</span></p>
                                <button onClick={() => handleadd(product)} className="border md:w-[250px] md:h-[40px] rounded-[50px] bg-[green] mt-2 hover:cursor-pointer">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Specialoffer />
            <Limittimeoffer />

        </>
    );
};

export default Bestsellingproducts;