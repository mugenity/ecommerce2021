import React from "react";
import Carousel from "../components/Carousel";
import GridImages from "../components/GridImages";
import Arrivals from "../components/Arrivals";
import VideoSection from "../components/VideoSection";
import Info from "../components/Info";
import Instagram from "../components/Instagram";
import Subscribe from "../components/Subscribe";

function Homepage() {
  return (
    <section>
      <Carousel />
      <GridImages />
      <Arrivals />
      <VideoSection />
      <Info />
      <Instagram />
      <Subscribe />
    </section>
  );
}

export default Homepage;
