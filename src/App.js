import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App () {
  useEffect (() => {
    AOS.init({ duration: 2000});

  })
  return (
    <div className="App app-container">
      <div className="aos-heading">
      <h1>Animate on Scroll (AOS) App</h1>
      </div>
      <div className="aos-grids-box-container">
        <div className="boxes-container">
          <div data-aos="fade-up" data-aos-duration="3000" className="box box1"></div>
          <div data-aos="fade-down" data-aos-easing="linear" className="box box2"></div>
          <div data-aos="flip-right" data-aos-offset="300" className="box box3"></div>
          <div data-aos="flip-left" className="box box4"></div>
          <div data-aos="zoom-in" className="box box5"></div>
          <div data-aos="zoom-out" className="box box6"></div>
          <div data-aos="fade-up-right" className="box box7"></div>
          <div data-aos="flip-up-left" className="box box8"></div>
          <div data-aos="zoom-in-up" className="box box9"></div>
          <div data-aos="zoom-out-down" className="box box10"></div>
        </div>
      </div>
    </div>
  );
};