// import Blogdesign from "./Blogdesign"

// const Blogesone = () => {

//     return (
//         <>
//             <div className=" bg-black md:w-[1521px] lg:[100%] w-[100%] ">

//                 <div className="flex py-8 text-blue bg-black text-center container  place-content-center gap-58  ">
//                     <div>
//                         <label className="input md:w-[300px]">
//                             <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                                 <g
//                                     strokeLinejoin="round"
//                                     strokeLinecap="round"
//                                     strokeWidth="2.5"
//                                     fill="none"
//                                     stroke="currentColor"
//                                 >
//                                     <circle cx="11" cy="11" r="8"></circle>
//                                     <path d="m21 21-4.3-4.3"></path>
//                                 </g>
//                             </svg>
//                             <input type="search" required placeholder="Search" />
//                         </label>
//                     </div>
//                     <div className="text-white ">
//                         <h2>Filter by Category</h2>
//                     </div>
//                     <div>
//                         <h2 className="text-white">sort by</h2>
//                     </div>
//                 </div>

//                 <div className="mt-7" >
//                     <div className="grid md:grid-cols-3 grid-cols-1 md:gap-25 md:justify-self-center">
//                         <Blogdesign />
//                         <Blogdesign />
//                         <Blogdesign />
//                         <Blogdesign />
//                         <Blogdesign />
//                         <Blogdesign />


//                     </div>
//                     <div className="container text-center ">
//                         <button className="text-white md:h-[40px] md:w-[140px] md:rounded-[10px] bg-[#AB572D]">Load more</button>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )

// }
// export default Blogesone


// import Blogdesign from "./Blogdesign";

// const Blogesone = () => {
//     return (
//         <div className="bg-black w-full px-4 md:px-10 ">
//             {/* Search & Filters Section */}
//             <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 py-8 text-white">
//                 {/* Search Bar */}
//                 <label className="input flex items-center gap-2 w-full md:w-[300px] bg-white text-black rounded px-2 py-1">
//                     <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                         <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
//                             <circle cx="11" cy="11" r="8"></circle>
//                             <path d="m21 21-4.3-4.3"></path>
//                         </g>
//                     </svg>
//                     <input type="search" required placeholder="Search" className="flex-1 outline-none bg-transparent" />
//                 </label>

//                 {/* Filter & Sort */}
//                 <h2 className="text-white">Filter by Category</h2>
//                 <h2 className="text-white">Sort by</h2>
//             </div>

//             {/* Blog Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//                 <Blogdesign />
//                 <Blogdesign />
//                 <Blogdesign />
//                 <Blogdesign />
//                 <Blogdesign />
//                 <Blogdesign />
//             </div>

//             {/* Load More Button */}
//             <div className="text-center mt-8">
//                 <button className="text-white h-10 w-36 rounded-md bg-[#AB572D] hover:bg-[#934824] transition duration-300">
//                     Load More
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Blogesone;


import React, { useState } from "react";
import Blogdesign from "./Blogdesign";

const Blogesone = () => {
    const [visibleCount, setVisibleCount] = useState(4); // Start by showing 4 items

    // Fake array of blog data (could be real data from API)
    const blogItems = new Array(12).fill(null); // Replace with your blog array

    // Function to load more blogs
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4); // Load 4 more
    };

    return (
        <div className="bg-black w-full px-4 md:px-10">
            {/* Search & Filters Section */}
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 py-8 text-white">
                <label className="input flex items-center gap-2 w-full md:w-[300px] bg-white text-black rounded px-2 py-1">
                    <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" className="flex-1 outline-none bg-transparent" />
                </label>

                <h2 className="text-white">Filter by Category</h2>
                <h2 className="text-white">Sort by</h2>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {blogItems.slice(0, visibleCount).map((_, index) => (
                    <Blogdesign key={index} />
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < blogItems.length && (
                <div className="text-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="text-white h-10 w-36 rounded-md bg-[#AB572D] hover:bg-[#934824] transition duration-300 hover:cursor-pointer"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Blogesone;
