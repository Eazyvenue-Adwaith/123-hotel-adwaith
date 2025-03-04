import Container from "@/components/shared/container/Container";
import React, { useState, useEffect } from "react";
import HeroDescription from "./HeroDescription";
import HeroSlider from "./HeroSlider";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
    className="pt-40 sm:pt-40 h-screen bg-no-repeat bg-cover bg-bottom"
    style={{
      backgroundImage: "url(/assets/home-page/banner/wall3.jpg)",
    }}
  >
      <Container className="h-full">
        <div className="flex flex-col justify-center h-full gap-y-12">
          <div className="grid md:grid-cols-12 md:items-center gap-12 grid-cols-1">
            <HeroDescription />
            {!isMobile && <HeroSlider />}
            <HeroSearch />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
