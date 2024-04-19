import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css"
import { FaDiscord ,FaDove,FaFacebook } from "react-icons/fa";
const footer=()=>{
    return(<>
    <section className=" relative top-32  md:w-3/5  m-auto mt-32 px-5 py-10 bg-gray-200 rounded-lg transform -translate-y-1/2 foote">
        <div className="grid grid-cols-2">
            <div>
                <h3>Ready to get started</h3>
                <h3>Talk to us today</h3>
            </div>
            <div className="flex justify-end items-center">
                <NavLink>
                    <button className="w-2/4 h-10 ml-24 h-12 flex justify-center items-center border border-solid border-blue-700 transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-md">Get Started</button>
                </NavLink>
            </div>
        </div>
    </section>
    <footer className="bg-blue-900 pt-32 pb-24">
        <div className="flex flex-col md:flex-row foot">
            <div className="footer-about">
             <h3 className="text-white text-lg font-bold my-6 ">Atul Technical</h3>
             <p className="text-white">The super fast color palettes generator! Create the perfect palette or get inspired by thousands of beautiful color schemes</p>
            </div>
       
        
            <div className="footer-about">
             <h3 className="text-white text-lg font-bold my-6 ">Subscribe our chanel</h3>
             <input
             type="email"
             placeholder="Email"
             required
             className="max-w-screen-lg text-black px-6 py-4 border border-black uppercase shadow"
             />
         <button   className=" mt-4 bg-purple-700 text-white px-5 py-2 min-w-[10em] border border-solid border-black uppercase text-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500   font-bold  custom-scale-80 btn">Subscribe</button>
        </div>
        <div className="footer-about">
             <h3 className="text-white text-lg font-bold my-6 ">Follow Us</h3>
             <div className="flex justify-around">
             <div className="rounded-full p-2 bg-white icon-footer">
                <FaDiscord/>
             </div>
             <div className="rounded-full p-2 bg-white icon-footer"><FaDove /></div>
             <div className="rounded-full p-2 bg-white icon-footer"><FaFacebook /></div></div>
           
        </div> 
        <div className="footer-about">
             <h3 className="text-white text-lg font-bold my-6 ">Call Us</h3>
             <h3 className="text-white text-lg  my-6 ">8858381402</h3>
           
        </div> 
         </div>
    </footer>
    </>)
}
export default footer;