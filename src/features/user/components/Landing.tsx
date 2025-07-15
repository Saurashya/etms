import React from "react";
import { PiCityFill } from "react-icons/pi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { DatePicker } from "@/features/shared/ui/DatePicker";


const city = ['kathmandu','Lalitpur','Pokhara','Bhaktapur']

const Landing = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="top">
        <img
          src="/landing-bg.png"
          alt=""
          className="w-full h-2/3 absolute top-0 left-0"
        />
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-evenly z-10 flex-col gap-4">
          <div className="header flex flex-col gap-4 justify-center items-center">
            <h1 className="text-5xl text-white">
              Discover and Book Events Near You
            </h1>
            <p className="text-white text-2xl">
              Safe, secure, reliable ticketing. Your ticket to live
              entertainment!
            </p>
          </div>
          <div className="timer bg-[linear-gradient(to_right,_#1EBBD7FF_0%,_#1EBBD7FF_50%,_#1EBBD766_100%)] h-[316px] w-[1360px] rounded-md p-6">
                <div>
                    <h2 className="text-xl my-4">Welcome to The Eventix</h2>
                </div>
                <div className="text-white my-2">
                    <h1 className="text-3xl">WHAT EVENT ARE YOU LOOKING FOR ?</h1>
                    <p className="text-lg">Discover concerts, festivals, conferences, workshops and more near you.</p>
                </div>
                <div className="search flex justify-around items-center my-12 bg-[rgba(40,90,99,0.25)] px-2 !py-4">
                   <div className="search-bar border-b-2 border-white w-[320px] flex gap-2 items-center">
                     <input type="text" className="outline-none p-2 w-full text-lg text-white" placeholder="Search for Events, Artish or Venue"/>
                    <IoSearch size={30} className="text-white"/>
                   </div>
                    <div className="location flex gap-2 items-center text-white text-lg">
                      <PiCityFill size={30} className="bg-white text-gray-500 p-2 rounded-full"/>
                      <p>City</p>
                      <select>
                          {
                            city.map((item, index) => {
                              return (
                                <option key={index}>{item}</option>
                              )
                            })
                          }
                      </select>
                    </div>
                    <div className="date flex gap-2 items-center text-white text-lg">
                      <MdOutlineDateRange size={30} className="bg-white text-gray-500 p-2 rounded-full"/>
                      <p>Date</p>
                      <DatePicker/>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
