// import Blogesone from "./Blogesone"

// const Blog = () =>{

//     return(
//         <>
//             <div className=" bg-black text-white w-[500px] md:w-[1521px] py-8">
//                 <div className="text-center  text-[40px]">
//                     <h1>Our blog Collection</h1>
//                 </div>
//                 <div className="text-[white] bg-black md:w-[1521px] md:h-[500px]">
//             <div className="md:flex md:flex-row-reverse grid grid-cols-1">
//                 <div>
//                     <img src="../public/Bloges/Frame 481.png" alt="" className="md:h-[450px] md:p-2 mt-4 md:w-[550px] mr-20" />
//                 </div>
//                 <div className="m-auto  md:w-[600px] mt-4 mr-38 md:h-[450px] w-[500px]">
                  
//                     <h1 className="text-balance text-[30px]">Discover the Art of Perfumery </h1>

//                     <p className="text-balance mt-4">Welcome to Local Face's Perfumery Blog Collection! Here, we invite you to immerse yourself in the captivating world of fragrances, where each blog post is a sensory journey that unveils the magic and allure of perfumes. Our team of fragrance enthusiasts, industry experts, and perfumers have curated an array of captivating articles to enrich your understanding and appreciation for these olfactory delights.</p>

//                     <p className="mt-7">At Local Face, we believe that perfumery is an extraordinary fusion of art, science, and emotion. Our passion for exquisite fragrances has inspired us to curate a treasure trove of blog posts, each designed to ignite your senses and deepen your appreciation for these olfactory wonders.</p>

//                     <p className="mt-7">At Local Face, we believe that perfumery is an extraordinary fusion of art, science, and emotion. Our passion for exquisite fragrances has inspired us to curate a treasure trove of blog posts, each designed to ignite your senses and deepen your appreciation for these olfactory wonders.</p>
                    
                    
//                 </div>

//             </div>

//     </div>

//             </div>

//             <Blogesone/>
//         </>
//     )

// }
// export default Blog 



import Blogesone from "./Blogesone";

const Blog = () => {
    return (
        <>
            <div className="bg-black text-white w-full px-4 py-10 md:px-10">
                {/* Title */}
                <div className="text-center text-3xl md:text-4xl font-semibold mb-10">
                    <h1>Our Blog Collection</h1>
                </div>

                {/* Intro Section */}
                <div className="bg-black text-white max-w-7xl mx-auto">
                    <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                        {/* Text Content */}
                        <div className="md:w-1/2">
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                                Discover the Art of Perfumery
                            </h1>

                            <p className="mt-4 text-sm md:text-base text-gray-300">
                                Welcome to Local Face's Perfumery Blog Collection! Here, we invite you to immerse yourself in the captivating world of fragrances, where each blog post is a sensory journey that unveils the magic and allure of perfumes. Our team of fragrance enthusiasts, industry experts, and perfumers have curated an array of captivating articles to enrich your understanding and appreciation for these olfactory delights.
                            </p>

                            <p className="mt-5 text-sm md:text-base text-gray-300">
                                At Local Face, we believe that perfumery is an extraordinary fusion of art, science, and emotion. Our passion for exquisite fragrances has inspired us to curate a treasure trove of blog posts, each designed to ignite your senses and deepen your appreciation for these olfactory wonders.
                            </p>

                            <p className="mt-5 text-sm md:text-base text-gray-300">
                                Every scent tells a story, and through our blogs, we aim to help you discover your own unique fragrance narrative.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="md:w-1/2">
                            <img
                                src="../public/Bloges/Frame 481.png"
                                alt="Perfume Illustration"
                                className="w-full h-auto max-h-[450px] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Cards Section */}
            <Blogesone />
        </>
    );
};

export default Blog;
