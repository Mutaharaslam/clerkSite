import React from "react";
import "./Home.scss";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Features from "../../components/features/Features";
import Announcement from "../../components/announcement/Announcement";

const Home = () => {
  return (
    <>
      <div className="siteWrapper bg-white">
        <Header></Header>
        <Banner></Banner>
        <About></About>
        <Features></Features>
        <Slider></Slider>
        <Announcement></Announcement>
      </div>
    </>
  ); 
};

export default Home;