import React from "react";
import { NavLink } from "react-router-dom";
import data from "./ServicesData";
import "./Services.css";

const Services = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl my-4 font-semibold text-gray-600">Our Services</h1>
            <div className="ml-16 max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {data.map((currEle) => {
                    const { id, name, Image, descripion } = currEle;
                    return (
                        <div key={id} className="rounded-lg shadow-xl servicebox">
                            <figure className="relative overflow-hidden w-auto flex justify-center items-center transition duration-500 ease-in-out servicesFig">
                                <img src={Image} alt={name} className="w-full" />
                            </figure>
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                                <p className="text-gray-700">{descripion}</p>
                                <NavLink to="/services" className="block mt-4 text-center text-blue-600 hover:underline">Read More</NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
