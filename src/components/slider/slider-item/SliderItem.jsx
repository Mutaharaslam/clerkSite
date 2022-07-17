import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Mousewheel, Keyboard, Lazy} from 'swiper'

interface props {
  NewsName?: string,
  sliderUrl?: string,
  desc?: string,
  date?: string,
  readMoreCTA?: string,
}

const SliderItem = ( props: props ) => {
  const {
    NewsName = '',
    sliderUrl = '',
    desc = '',
    date = '',
    readMoreCTA = '',
    propertiesHandler = () => null,
  } = props
  return (
    <div className="max-w-full w-full flex flex-col bg-lightGrey pb-4 rounded-lg overflow-hidden">
      <div className="w-full mb-3">
        <img
          className="w-full"
          priority
          src={sliderUrl}
          height={414}
          width={414}
          layout="responsive"
          alt="LOGO"
        />
      </div>
      <div className="flex flex-col px-4">
        {NewsName && (
          <div className="mb-5 text-left">
            <div>
              <span className="text-secondary text-p18 font-semibold">
                {NewsName}
              </span>
            </div>
            <span className="text-[12px] font-semibold">#1252</span>
          </div>
        )}

        {desc && (
          <p className="text-black font-normal text-p18 text-left text-p14">
            {desc}
          </p>
        )}
        <div className="flex flex-row justify-between items-center mt-2">
          {date && (
            <div className="flex flex-col items-start">
              <span className='text-black flex items-center font-semibold text-p18 mb-0 after:bg-diamondIcon after:content-[""] after:block after:bg-no-repeat after:bg-contain after:w-[9px] after:h-[15px] after:ml-2'>
                {date}
              </span>
            </div>
          )}
          <div className="flex">
            <div className="flex flex-col">
              <span className="text-p14 font-semibold text-DarkGrey">
                Items
              </span>
              <span className="text-primary font-semibold text-p14 mt-1">
                #2222
              </span>
            </div>

            <div className="flex flex-col ml-8">
              <span className="text-p14 font-semibold text-DarkGrey">
                Rarity
              </span>
              <span className="text-primary font-semibold text-p14 mt-1">
                #1135
              </span>
            </div>
          </div>

          {!date && (
            <div
              className="flex pr-2 cursor-pointer"
              onClick={propertiesHandler}
            >
              <span className="text-primary font-semibold text-p18 ml-2">
                Properties
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SliderItem
