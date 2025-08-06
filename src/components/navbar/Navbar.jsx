import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
const Navbar =()=>{
  // const item = useSelector((state)=>state.cart)
    return(
        <>
    <div className="main md:h-[80px]  relative bg-black ">


      {/* <img src="../public/Ourvalues/Vector (4).png" alt="" className="absolute top-0 md:w-[1700px] md:h-[150px]" /> */}
      {/* <img src="../public/images/Vector (3).png" alt="" className="absolute top-0 md:w-[1000px] md:h-[100px]" /> */}


{/* Navbar start  */}

        <div className="navbar text-[#16425b] place-content-around text-blue-50 relative z-30 ...">
  <div className="">
    <div className="dropdown text-blue-500 z-30 ...">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden z-30 ...">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="">
        <img src="../public/images/Local Face (1).png" alt="" className="w-[170px] h-[15px] mb-7"/>
    </a>
  </div>
        
  <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <NavLink to="/home"> Home  </NavLink> </li>
      <li> <NavLink to='/shop'> Shop  </NavLink> </li>
      <li> <NavLink to='/about'> About us  </NavLink> </li>
      <li> <NavLink to='/services'> Services </NavLink> </li>
      <li> <NavLink to='/blog'> Blog  </NavLink> </li>
      <li> <NavLink to='/Contact'> Contact us  </NavLink> </li>
     

    </ul>
  </div>

  <div className=" mr-8">
    <div className="icons ">
        <div className="flex gap-5">
           {/* <Navlink > <i class="fa-regular fa-heart">   </i> </Navlink> */}
           {/* <Navlink >  <i class="fa-solid fa-heart">  </i> </Navlink> */}
           <NavLink className='hover:cursur-pointer' >  <i class="fa-regular fa-heart">   </i>  </NavLink> 
           <NavLink className='hover:cursur-pointer' >  <i class="fa-solid fa-heart">  </i>  </NavLink> 
          <NavLink className='hover:cursur-pointer ' to="/shoping" > <i class="fa-solid fa-cart-shopping "> </i>  </NavLink> 
        </div>
    </div>
  </div>


</div>

{/* Navbar End */}

          


</div>
        </>
    )
}
export default Navbar 