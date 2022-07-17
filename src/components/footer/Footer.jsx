import React from "react";
import charlotLogo from "./../../assets/images/logo Charlotte CLERK-10.png"

const Footer = () => {
  return (
    <>
      <section className="Footer container flex flex-col mx-auto py-8 flex items-center justify-center bg-white">
        <img className="w-3/12" src={charlotLogo} alt="" />
      </section>
      <section className="container mx-auto">
        <div className="bg-red h-10 w-full"></div>
      </section>
    </>
  );
};

export default Footer;
