import React, {useState} from "react";
import "./Banner.scss";
import Signature from "./../../assets/images/Roger signature.png"
import RogerAvatar from "./../../assets/images/Roger Isolated.png"

function classNames ( ...classes ) {
  return classes.filter( Boolean ).join( ' ' )
}

const Banner = () => {
  const [show, setShow] = useState( false );
  return (
    <>
      <div className="w-full md:px-6 ">
        <div className="banner mt-8 relative h-128 bg-heroImg bg-no-repeat  container mx-auto flex flex-col items-start pt-8 sm:pt-16 md:pt-24 pl-8 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-48 w-full" >
          <img className="mr-2 lg:mr-12 mt-2 w-7/12 sm:w-6/12 md:w-4/12 lg:mt-12 absolute right-0 bottom-0" src={RogerAvatar} alt="bg" />
         
          <div className="w-11/12 xl:w-1/4 md:w-2/3 text-white sm:text-left ">
            <h1 className="text-4xl font-bold font-serif md:mb-8 mb-2">Roger D.Eaton </h1>
            <p className="text-sm font-semibold font-sans md:mb-8 mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, onum onsectetuer adipisci</p>
            <p className="text-sm font-semibold font-sans mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, onum Lorem ipsum dolor sit amet, consectetuer adt amet, consectetuer adipiscing elit, onum</p>
          </div>
          <img className="h-16 w-auto sm:h-24" src={Signature} alt="Sig" />
        </div>
      </div>
    </>
  );
};

export default Banner;
