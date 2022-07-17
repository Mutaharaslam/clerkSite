import React from "react";
import "./Features.scss";
import Icon1 from "./../../assets/images/final WEB CLERK-03-overlay.png";
import Icon2 from "./../../assets/images/final WEB CLERK-04-overlay.png";
import Icon3 from "./../../assets/images/final WEB CLERK-05-overlay.png";
import Icon4 from "./../../assets/images/final WEB CLERK-06-overlay.png";
import Icon5 from "./../../assets/images/final WEB CLERK-07-overlay.png";
import Icon6 from "./../../assets/images/final WEB CLERK-08-overlay.png";
const features = [
  {
    name: 'Pay Tickets',
    icon: Icon1,
  },
  {
    name: 'Court Search',
    icon: Icon2,
  },
  {
    name: 'Records Search',
    icon: Icon3,
  },
  {
    name: 'Child Support',
    icon: Icon4,
  },
  {
    name: 'E-file',
    icon: Icon5,
  },
  {
    name: 'Self Help',
    icon: Icon6,
  },
]

const Features = () => {
  return (
    <div  className="feature bg-gray-light">
      <div className="container mx-auto py-12 bg-cover bg-no-repeat w-full bg-left-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map( ( feature ) => (
                <div className="flex flex-col items-center justify-start">
                  <div className="w-40 mb-2">
                    <img className='' src={feature.icon} alt={feature.name} />
                  </div>
                  <h5 className="text-gray-dark font-semibold">{feature.name}</h5>
                </div>
              ) )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
