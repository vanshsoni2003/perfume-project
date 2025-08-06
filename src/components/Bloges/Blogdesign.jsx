// const Blogdesign =()=>{

//     return(
//         <>
//         <div>

//         <div className="md:w-[375px] md:h-[708px] ">
//                         <img src="../public/latest artices/latsest articest.png" alt="" />
//                         <div className="mt-8 ">
//                         <h1 className="text-pretty text-white">The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir</h1>
//                         <p className="text-pretty mt-4 text-amber-600/75 dark:text-amber-400/75">Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.</p>

//                         <button className="md:w-[100px] md:h-[40px] text-red mt-4 bg-blue-900 rounded-[10px] hover:cursor-pointer hover:bg-blue-800">Read more</button>
// </div>
//                     </div>


//         </div>
//         </>
//     )

// }
// export default Blogdesign

const Blogdesign = () => {
    return (
        <div className="bg-black rounded-lg overflow-hidden shadow-md mx-auto w-full max-w-md">
            {/* Image */}
            <img
                src="../public/latest artices/latsest articest.png"
                alt="Lavender Perfume"
                className="w-full h-auto object-cover"
            />

            {/* Content */}
            <div className="p-5">
                <h1 className="text-white text-lg font-semibold leading-snug">
                    The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir
                </h1>
                <p className="mt-3 text-amber-600/75 dark:text-amber-400/75 text-sm leading-relaxed">
                    Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of
                    relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in
                    creating captivating fragrances loved by many.
                </p>

                {/* Button */}
                <button className="mt-5 px-4 py-2 text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition duration-300">
                    Read more
                </button>
            </div>
        </div>
    );
};

export default Blogdesign;
