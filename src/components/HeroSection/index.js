import React from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome To My Website</HeroH1>
        <HeroP>
          This is Sankalp Wahane a Web Developer and a Machine Learning
          Enthusiast
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
