import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import { useGlobalContext } from "../Context";

const About = () => {
      const {UpdateAboutPage} = useGlobalContext();

       useEffect(()=> UpdateAboutPage(),[]);
       
  return (
  <>
      <HeroSection />
      </>
  )

};

export default About;
