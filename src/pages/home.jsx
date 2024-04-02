import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Internal Import
import { useStateContext } from "../context/context";

import {
  About,
  AboutRight,
  AboutThird,
  Faq,
  Features,
  Footer,
  Header,
  HeroSection,
  Info,
  Price,
  Service,
} from "../components/home/z-index";

// Importing React Icons

function Home() {
  const { listMembership } = useStateContext();

  return (
    <main className="home text-white fixed">
      <Header />

      <div
        className="component-container overflow-y-auto relative top-[64px]"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <HeroSection href="/" />
        <Service href="/service" />
        <About href="/about" />
        <AboutRight />
        <AboutThird />
        <Features href="/features" />
        <Price href="/price" />
        <Faq />
        <Info />
        <Footer href="/contact" />
      </div>
    </main>
  );
}

export default Home;
