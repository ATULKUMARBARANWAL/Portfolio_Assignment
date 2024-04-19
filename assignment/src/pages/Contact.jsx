import React from "react";
import Hero from "./Hero/Hero";
const Contact=()=>{
    
    return (<>
      <div className="mt-4 flex flex-col justify-center items-center p-4 md:p-0">
        <h1 className="text-4xl my-4 font-semibold text-gray-600">Feel Free To Contact Us </h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d111928.87632957609!2d77.5417053041504!3d28.756062808833956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713526317016!5m2!1sen!2sin"
         className="mt-8 w-full h-3/6 border-0" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         <div className="container">
           <div  className="contact-form text-center mt-16">
          <form className="m-auto max-w-md max-h-60 flex flex-col gap-12 rounded-lg shadow-xl servicebox servicebox">
            <input className="max-w-screen-lg text-black px-6 py-4 border border-black uppercase shadow"
            type="text"
             name="username"
             placeholder="username"
             autoComplete="off"
             required  
  />
  <input className="max-w-screen-lg text-black px-6 py-4 border border-black uppercase shadow"
            type="email"
             name="Email"
             placeholder="Email"
             autoComplete="off"
             required  
  />
  <textarea className="max-w-screen-lg text-black px-6 py-4 border border-black uppercase shadow " name="message" cols="30" rows="6 " autoComplete="off"
             required >

  </textarea>
  <input  type="submit" value="send" className="max-w-56 mt-4 bg-purple-700 text-white px-5 py-2 border border-solid border-black uppercase text-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500  text-white font-bold  custom-scale-80 btn"/>
          </form>
           </div>
         </div>
        </div>

    </>)
}
export default Contact;