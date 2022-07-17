import React from "react";
import "./About.scss";


const About = () => {
  return (
    <section className="container mx-auto py-16 px-2 flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 role="heading" className="md:text-3xl text-xl font-bold text-center text-blue mb-4">
          Welcome to theCharlotte County Clerk <br />
          of the Circuit Court and  County Comptroller
        </h1>
        <div className="md:w-3/6 w-5/6 bg-search h-20 bg-no-repeat bg-contain bg-center relative">
          <input className="appearance-none border-none bg-transparent xl:ml-20 lg:ml-12 md:ml-8 sm:text-base text-sm sm:ml-12 ml-10 w-auto h-full placeholder-gray-dark py-2  px-3 text-gray-700 focus:outline-none focus:ring-inset" id="username" type="text" placeholder="How May we serve you" />
        </div>
        <div className="flex items-start flex-col">
          <h2 role="contentinfo" className="text-left mb-4 text-2xl text-gray mt-5 font-serif italic">
            Our mission is to preserve the public trust as guardians <br />
            of the people's records and assets.
          </h2>
          <button className="lg:text-xl font-bold bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white text-white px-8 py-1 rounded-full inline-block text-left">Meet Clerk Eaton
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default About;
