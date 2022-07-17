import React from "react";
import "./Slider.scss";
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import redArrow from "./../../assets/images/red-arrow.png"
import sliderImg1 from "./../../assets/images/jury.jpeg"
import sliderImg2 from "./../../assets/images/photo-1532995092664-7027dcede29f.jpeg"
import sliderImg3 from "./../../assets/images/photo-1590099543482-3b3d3083a474.jpeg"
import sliderImg4 from "./../../assets/images/photo-1631663339387-da9356401c86.jpeg"
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Mousewheel, Keyboard, Lazy} from 'swiper'
import SliderItem from "./slider-item/SliderItem";

const Slider = () => {

  const slidesData = (
    [
      {
        NewsName: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISC',
        sliderUrl: sliderImg1,
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ',
        date: 'Oct 10, 2022',
        readMoreCTA: 'Read More'
      },
      {
        NewsName: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISC',
        sliderUrl: sliderImg2,
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ',
        date: 'Oct 10, 2021',
        readMoreCTA: 'Read More'
      },
      {
        NewsName: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISC',
        sliderUrl: sliderImg3,
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ',
        date: 'Apr 10, 2022',
        readMoreCTA: 'Read More'

      },
      {
        NewsName: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISC',
        sliderUrl: sliderImg4,
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ',
        date: 'Oct 19, 2020',
        readMoreCTA: 'Read More'

      },
    ]
  )
  return (
    <>
      <section className="sliderSection container mx-auto pt-20 md:pb-32 pb-16 px-6 bg-white relative">
        <div className="flex flex-col">
          <img className="w-8 mb-2" src={redArrow} alt="" />
          <h1 className="text-5xl font-bold"> Cerk News</h1>
        </div>
        <div className="sliderWrapper mb-10 relative">
          <div className="grid grid-cols-2 navigationHolder mb-5">
            <div className="prev mr-3">
              <BsChevronCompactLeft />
            </div>
            <div className="next">
              <BsChevronCompactRight />
            </div>
          </div>
          <Swiper
            className="mySwiper"
            lazy={true}
            spaceBetween={30}
            pagination={false}
            mousewheel={false}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            keyboard={true}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              840: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Lazy]}
          >
            {slidesData.map( ( slideData ) => (
              <SwiperSlide>
                <div className="mx-2 shadow-lg bg-gray-light sliderItem">
                  <div className="imageHolder overflow-hidden">
                    <img className=" object-center object-cover" src={slideData.sliderUrl} alt="" />
                  </div>
                  <div className="px-8 flex flex-col items-end text-left">
                    <span className="text-red text-xs mb-2 self-start">{slideData.date}</span>
                    <h4 className="text-blue text-sm font-bold mb-4">{slideData.NewsName}</h4>
                    <h4 className="text-gray-dark text-xs font-semibold mb-2">{slideData.desc}</h4>
                    <button className="bg-red readMoreCTA text-white p-1 text-xs font-medium">{slideData.readMoreCTA}</button>
                  </div>

                </div>
              </SwiperSlide>
            )
            )}
          </Swiper>
        </div>
      </section>

    </>
  );
};

export default Slider;
