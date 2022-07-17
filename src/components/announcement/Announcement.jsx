import React from "react";
import "./Announcement.scss";
import sliderImg3 from "./../../assets/images/photo-1590099543482-3b3d3083a474.jpeg"

const Announcement = () => {
  return (
    <section className="announcement-section bg-gray-light relative">
      <div className="curvedBG bg-white lg:h-40 sm:h-24 h-16"></div>
      <div className="container mx-auto pt-20 pb-16 px-8 flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <span className="bg-red h-1 w-20 mb-2"></span>
        <h1 role="heading" className="md:text-5xl text-xl font-bold text-center text-blue mb-4">
          <span className="font-normal">NOTICE</span> <span className="text-xs text-red align-middle">★</span> ANNOUNCEMENTS
        </h1>
        <div className="flex md:flex-row flex-col w-full pt-12 justify-between">
          
          <div className="shadow-lg bg-white rounded-20 md:w-4/12 w-full p-8 relative overflow-hidden md:mb-0 mb-8">
              <div className="imageHolder overflow-hidden rounded-20">
                <img className=" object-center object-cover" src={sliderImg3} alt="" />
              </div>
              <div className=" pt-8 flex flex-col text-left">
                <div className="flex flex-row justify-between mb-3">
                  <span className="text-gray text-xs  ">By Richard Kaplan</span>
                  <span className="text-blue text-xs ">10 Oct 2021</span>
                </div>
                <h4 className="text-red text-md font-bold mb-2">Lorem ipsum dolor sit amet, consect etuer cing elit, </h4>
                <h4 className="text-black text-xs font-semibold mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorpe...r </h4>
                <button className="bg-red readMore text-white py-2 px-8 text-xs font-medium">Read More</button>
              </div>
          </div>
          
          <div className="flex flex-col md:w-7/12 w-full">
            <div className=" shadow-lg bg-white rounded-20 px-8 pt-4 pb-6 relative overflow-hidden mb-8">
                <div className="flex flex-col text-left">
                <span className="text-gray text-xs mb-4">By Richard Kaplan</span>
                  <h4 className="text-red text-md font-bold mb-2">Lorem ipsum dolor sit amet, consect etuer cing elit, </h4>
                  <h4 className="text-black text-xs font-semibold mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorpe...r </h4>
                  <span className="bg-red cornerDate text-white py-2 px-8 text-xs font-bold">10.10.2010</span>
                </div>
            </div>

            <div className="shadow-lg bg-white rounded-20 px-8 pt-4 pb-6 relative overflow-hidden mb-8">
                <div className="flex flex-col text-left">
                <span className="text-gray text-xs mb-4">By Richard Kaplan</span>
                  <h4 className="text-red text-md font-bold mb-2">Lorem ipsum dolor sit amet, consect etuer cing elit, </h4>
                  <h4 className="text-black text-xs font-semibold mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorpe...r </h4>
                  <span className="bg-red cornerDate text-white py-2 px-8 text-xs font-bold">10.10.2010</span>
                </div>
            </div>
            <div className="shadow-lg bg-white rounded-20 px-8 pt-4 pb-6 relative overflow-hidden mb-8">
                <div className="flex flex-col text-left">
                <span className="text-gray text-xs mb-4">By Richard Kaplan</span>
                  <h4 className="text-red text-md font-bold mb-2">Lorem ipsum dolor sit amet, consect etuer cing elit, </h4>
                  <h4 className="text-black text-xs font-semibold mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorpe...r </h4>
                  <span className="bg-red cornerDate text-white py-2 px-8 text-xs font-bold">10.10.2010</span>
                </div>
            </div>
          </div>
        </div>


      </div>
      </div>
      
    </section>
  );
};

export default Announcement;
