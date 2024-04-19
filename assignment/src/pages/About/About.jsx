import React from "react";
import Hero from "../Hero/Hero";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";
const About=()=>{
    const{updateAboutPage}=useGlobalContext();
        useEffect(()=>
            updateAboutPage(),[])
    return <Hero/>
}
export default About;