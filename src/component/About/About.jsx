import React from "react";
import Button from "../UI/Reuseable/Button";
import Pics from "../../Assets/Rectangle 55.webp";
import Pics2 from "../../Assets/Rectangle 56.webp";
import Anime from "../UI/Reuseable/ScrollerAnime";

const About = (props) => {
  return (
    <Anime>
      <div className="bg-[#1C1A19] text-white pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-8 lg:px-24 pb-12 lg:py-24 flex flex-col gap-6 sm:gap-8 items-center min-h-screen justify-center text-center ">
        <h1 className="text-7xl sm:text-9xl font-bold text-[#F55800] fade-up">
          About me
        </h1>
        <p className="sm:text-4xl font-sans font-thin fade-up">
          Hey there! I can help you build a product, feature or website. Look
          through some of my work and experience! If you like what you see and
          have a project you need coded, don’t hesitate to contact me.
        </p>
        <Button type="submit" className="border-transparent fade-up">
          {" "}
          Get My Resume{" "}
        </Button>
        <hr className="h-[1px] w-full bg-[#767676] fade-up" />
        <div className="flex  justify-between items-start gap-12 lg:gap-80">
          <div>
            <div className="flex gap-2 pb-4">
              <img
                className="w-6 h-6 sm:w-12 sm:h-12 fade-up"
                src={Pics}
                alt="L"
              />
              <h1 className="flex items-center font-bold text-2xl sm:text-4xl fade-up ">
                Language
              </h1>
            </div>
            <ul className="font-bold text-xl sm:text-2xl text-left pl-4 fade-up">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVA SCRIPT</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 pb-4">
              <img
                className="w-4 h-4 sm:w-8 sm:h-8 fade-up"
                src={Pics2}
                alt="Square"
              />
              <h2 className="flex items-center text-2xl sm:text-4xl font-bold fade-up">
                Frameworks
              </h2>
            </div>
            <ul className="font-bold text-xl text-left sm:text-3xl pl-2 fade-up">
              <li>React.js</li>
            </ul>
          </div>
        </div>
      </div>
    </Anime>
  );
};

export default About;
