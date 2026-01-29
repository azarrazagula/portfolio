import React, { useState } from "react";
import RecentWork from "../Portfolio/Recentwork";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ScrollerAnime from "../UI/Reuseable/ScrollerAnime";
import Backdrop from "../UI/Backdrop/Backdrop";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const [isShow, setIsShow] = useState(false);

  const showHandler = () => {
    setIsShow(true);
  };

  const hideHandler = () => {
    setIsShow(false);
  };
  return (
    <>
      <ScrollerAnime>
        <div
          className={`bg-[#1C1A19] text-white pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-8 lg:px-24 pb-12 lg:py-24 flex flex-col gap-6 sm:gap-8 items-center min-h-screen justify-center text-center ${styles.h1}`}
        >
          <h1 className=" text-[#F55800] font-bold text-3xl  sm:text-5xl lg:text-8xl fade-up fade-delay-1">
            Hey There. I'm Azar.
          </h1>

          <p className="font-bold text-lg sm:text-2xl lg:text-4xl fade-up fade-delay-2">
            I’m a Frontend Developer
          </p>

          <p className="text-base sm:text-lg lg:text-xl max-w-3xl fade-up fade-delay-3">
            I can help you build a product , feature or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hesitate to contact me.
          </p>
        </div>
      </ScrollerAnime>
      {isShow && <Backdrop onClose={hideHandler} />}
      <RecentWork onShowIt={showHandler} />
      <About />
      <Contact />
      <h2 className={`text-center ${styles.h2}`}>
        hello hey there how are you
      </h2>
    </>
  );
};

export default Portfolio;
