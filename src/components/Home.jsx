import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import { useGlobalContext } from "../Context";
 import Services from "./Services";
import Contact from "./Contact";
const Home = () => {
  const { UpdateHomePage } = useGlobalContext();
 useEffect(() => UpdateHomePage(), []);
    
  return (
    <>
      <HeroSection />
       <Services/>
       <Contact/>
    </>
  );
};

export default Home;
