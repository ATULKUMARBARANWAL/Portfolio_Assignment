import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CgFormatJustify,CgBackspace } from "react-icons/cg";
// const Navbar = () => {
//     return (
//         <nav className="flex justify-center">
//             <div className="max-w-7xl w-full">
//                 <ul className="flex flex-col md:flex-row md:gap-12 mt-8 navbarlist">
//                     <li>
//                         <NavLink to="/" className="nav-link">Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/services" className="nav-link">Services</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/contact" className="nav-link">Contact</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about" className="nav-link">About</NavLink>
//                     </li>
//                 </ul>
//                 <div className="mobile-navbar-btn">
//               <CgFormatJustify name="menu-outline" className="menu-outline mobile-nav-icon"/>
//               <CgBackspace name="close-outline" className="close-outline mobile-nav-icon"/>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


const Navbar = () => {
    const[openMenu,setOpenMenu]=useState(false);
    return (
        <nav className="flex justify-center">
            <div className={openMenu?"max-w-7xl w-full active":"max-w-7xl w-full"}>
                <ul className="flex gap-12 mt-8 navbarlist">
                    <li>
                        
                        <NavLink to="/" onClick={()=>setOpenMenu(false)} className="hover:text-gray-200 inline navbarL e-block text-xl  uppercase transition-black duration-200">Home</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/services" onClick={()=>setOpenMenu(false)} className="hover:text-gray-200 navbarL  inline-block text-xl  uppercase transition-black duration-200">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={()=>setOpenMenu(false)} className="hover:text-gray-200 navbarL  inline-block text-xl  uppercase transition-black duration-200">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={()=>setOpenMenu(false)} className="hover:text-gray-200 navbarL inline-block text-xl  uppercase transition-black duration-200">About</NavLink>
                    </li>
                </ul>
                <div className="mobile-navbar-btn ">
               <CgFormatJustify onClick={()=>setOpenMenu(true)} name="menu-outline" className="menu-outline mobile-nav-icon"/>
               <CgBackspace onClick={()=>setOpenMenu(false)} name="close-outline" className="close-outline mobile-nav-icon"/>
               </div>
            </div>
        </nav>
    );
};
export default Navbar;