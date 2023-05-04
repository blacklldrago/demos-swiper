import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import { Navigation } from "swiper";


export default function App() {
  return (
    <div className="myContainer">
      <h1 style={{fontSize:"80px", paddingBottom:"20px"}}>Simple Swiper</h1>
      <Swiper navigation={true} loop = {true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOe7xBJFU5aaA_Qlyft2s8kVvtpNHo8YJlA&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOe7xBJFU5aaA_Qlyft2s8kVvtpNHo8YJlA&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOe7xBJFU5aaA_Qlyft2s8kVvtpNHo8YJlA&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOe7xBJFU5aaA_Qlyft2s8kVvtpNHo8YJlA&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOe7xBJFU5aaA_Qlyft2s8kVvtpNHo8YJlA&usqp=CAU" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}