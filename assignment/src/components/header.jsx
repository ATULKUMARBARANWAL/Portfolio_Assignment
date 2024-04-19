// import React from "react";
// import { NavLink } from "react-router-dom";
// import Navbar from "../pages/Navbar";

// const header=()=>{
//     return(<header className="px-12 h-24 bg-sky-100 flex justify-between text-center ">
//         <NavLink to="/">
//             <img className ="h-12 max-w-30  mt-4"src="./images/logo.png" alt="logo"/>
        
//         </NavLink><Navbar/>
//     </header>)
// }
// export default header;
import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const Header = () => {
    return (
        <header className="px-4 md:px-12 py-4 md:py-6 md:h-24 bg-sky-100 flex flex-col md:flex-row items-center justify-between">
            <NavLink to="/" className="flex items-center">
                <img className="h-12 max-w-30  mt-4" src="./images/logo.png" alt="logo"/>
            </NavLink>
            <Navbar />
        </header>
    );
};

export default Header;
