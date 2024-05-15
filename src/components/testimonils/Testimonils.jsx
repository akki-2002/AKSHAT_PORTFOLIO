import React from "react";
import "./testimonils.css";
import IMG1 from "../../assets/Akshat_Agrawal_TCS_ION_pages-to-jpg-0001.jpg";
import IMG2 from "../../assets/AkshatAgrawal-BVCOE_CyberOps-certificate_page-0001.jpg"
import IMG3 from "../../assets/AkshatAgrawal-VIP 2023_BVCOE_N-certificate Network Essentials_page-0001.jpg"
import IMG4 from "../../assets/AOH PARTICIPATION.jpg"
import IMG5 from "../../assets/CISCO Virtual Internship Certificate_page-0001.jpg"
import IMG6 from "../../assets/Coursera Data Analytics Professional Certificate_page-0001.jpg"
import IMG7 from "../../assets/IBM PROF_page-0001.jpg"
import IMG8 from "../../assets/ICICC-2024-202340_page-0001.jpg"
import IMG9 from "../../assets/Internship Certificate Akshat Agrawal Red Fibre_page-0001.jpg"
import IMG10 from "../../assets/Oasis Infobyte VINTERN_page-0001.jpg"

// import Swiper core and required modules
import {  Pagination  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';





function Testimonils() {
  return (
    <section id="testimonils">
      <h4>My Achievements</h4>
      <h2>Certifications</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
   
      >

    
        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={IMG1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={IMG2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={IMG3} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={IMG4} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={IMG5} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={IMG6} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={IMG7} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={IMG8} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={IMG9} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="certificate-image">
            <img src={IMG10} alt="" />
          </div>
        </SwiperSlide>
        

       

      </Swiper>
    </section>
  );
}

export default Testimonils;
