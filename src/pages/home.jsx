import React, { useState, useEffect } from "react";

// Internal Import
import { useStateContext } from "../context/context";

import {
  About,
  AboutRight,
  AboutThird,
  Faq,
  Features,
  Header,
  HeroSection,
  Info,
  Price,
  Service,
  Tap,
  Testimonial,
} from "../components/home/z-index";

function Home() {
  const { listMembership } = useStateContext();

  return (
    <div className="home text-white fixed">
      <Header />
      <div
        className="component-container overflow-y-auto relative top-[64px]"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <HeroSection></HeroSection>
        <About></About>
        <Features></Features>
        <Info></Info>
        <Price></Price>
        <Service></Service>
        <Tap></Tap>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
}

export default Home;
