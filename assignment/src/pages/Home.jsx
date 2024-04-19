
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Contact from "./Contact";
import About from "./About/About";

const home=()=>{
   
    // const data={  
        // name:"Atul Technical",image:"https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?size=626&ext=jpg&ga=GA1.1.860250380.1713256139&semt=ais"}
        const{updateHomePage}=useGlobalContext();
        useEffect(()=>
            updateHomePage(),[])
    return(<>
    <Hero />
    <Services/>
    <Contact/>
   
    </>)
}
export default home; 