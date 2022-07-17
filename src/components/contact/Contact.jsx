import React, {useState} from "react";
import "./Contact.scss"
import Logo from "../../assets/images/logo CLERK-09.png";
import fb from "./../../assets/images/fb.png";
import insta from "./../../assets/images/insta.png";
import twiter from "./../../assets/images/twiter.png";
import linkedin from "./../../assets/images/linkedin.png";
import yt from "./../../assets/images/yt.png";
const Contact = () => {

  return (
    <section className="contact-section bg-blue relative">
      <div className="curvedBG bg-gray-light lg:h-32 sm:h-24 h-16"></div>
      <div className="container mx-auto pt-24 pb-16 px-8 flex items-center justify-center ">
      <div className="w-full flex flex-col items-center justify-center">
        <img className=" object-center object-cover w-24 mb-4" src={Logo} alt="" />
        <h2 className="md:text-5xl text-xl font-medium text-center font-serif text-white mb-0">
          ROGER D. EATON
        </h2>
        <p className="font-sans text-white m-0"> Clerk of the Circuit Court & County Comptroller</p>
        <p className="textSpaced font-serif text-white m-0 uppercase">CHARLOTTE COUNTY</p>
        <div className="flex md:flex-row flex-col w-10/12 pt-16 md:pl-12 justify-center mx-auto">
          <div className=" md:w-6/12 w-full md:p-8 pb-2">
            <div className="mb-6">
              <h3 className="font-serif text-2xl text-blue-light font-semibold">Justice Center</h3>
              <p className="text-white font-semibold">350 E. Marion Avenue <br />
                Punta Gorda, FL 33950</p>
            </div>
            <div className="mb-4">
              <h3 className="font-serif text-2xl text-blue-light font-semibold">
                Murdock Administration Building
              </h3>
              <p className="text-white font-semibold">350 E. Marion Avenue <br />
                Punta Gorda, FL 33950</p>
            </div>
          </div>
          <div className="md:w-6/12 w-full md:p-8 p-2">
            <div>
              <h3 className="font-serif text-2xl text-blue-light font-semibold">
                Helpful Resources
              </h3>
              <ul className="text-white font-semibold">
                <li><a href="">Contact us</a></li>
                <li><a href="">Drop Box Locations</a></li>
                <li><a href="">FAQs</a></li>
                <li><a href="">Fee Schedule</a></li>
                <li><a href="">Holiday Schedule</a></li>
                <li><a href="">Protecting Your Information</a></li>
                <li><a href="">Public Records Request</a></li>
                <li><a href="">Self Help and Forms Online</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-10/12 pt-8 md:pl-12 justify-center mx-auto">
          <div className="md:w-6/12 w-full md:p-8 p-2">
            <div>
              <h3 className="font-serif text-2xl text-blue-light font-semibold">
                Helpful Resources
              </h3>
              <ul className="text-white font-semibold">
                <li><a href="">Disclaimer</a></li>
                <li><a href="">Accessibility Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="md:w-6/12 w-full md:p-8 p-2">
            <div className="mb-3">
              <h3 className="font-serif text-2xl text-blue-light font-semibold">Justice Center</h3>
            </div>
            <ul className=" bg-blue flex flex-row p-0">
                <li className="mr-4 rounded-lg overflow-hidden"><a href=""> <img src={insta} alt="" /> </a></li>
                <li className="mr-4 rounded-lg overflow-hidden"><a href=""> <img src={fb} alt="" /> </a></li>
                <li className="mr-4 rounded-lg overflow-hidden"><a href=""> <img src={yt} alt="" /> </a></li>
                <li className="mr-4 rounded-lg overflow-hidden"><a href=""> <img src={twiter} alt="" /> </a></li>
                <li className="rounded-lg overflow-hidden"><a href=""> <img src={linkedin} alt="" /> </a></li>
              </ul>
          </div>

        </div>


      </div>
    </div>
    </section>
    
  );
};

export default Contact;
