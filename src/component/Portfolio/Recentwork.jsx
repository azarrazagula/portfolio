import React from "react";
import Pics from "../../Assets/Img Placeholder.webp";
import ScrollerAnime from "../UI/Reuseable/ScrollerAnime";
import Button from "../UI/Reuseable/Button";
const MyRecentWork = (props) => {
  return (
    <>
      <ScrollerAnime>
        <div className=" max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-0 lg:py-32">
          {/* Title + Line */}
          <div className="text-[#091E42] flex items-center justify-center gap-4 w-full py-6 pb-12">
            <p className="font-bold text-3xl sm:text-5xl lg:text-7xl whitespace-nowrap fade-up">
              My Recent Works
            </p>

            <hr className="h-[3px] bg-[#767676] flex-1 fade-up " />
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-8 items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                className="w-full max-w-md h-48 sm:h-64 lg:h-auto object-contain fade-up"
                src={Pics}
                alt="LOGO"
              />
            </div>

            {/* Text Section */}
            <div className="text-textcolor w-full lg:w-1/2 text-center lg:text-left">
              <p className="font-bold text-2xl sm:text-3xl lg:text-4xl font-sans pb-6 fade-up">
                Multi-Post Stories
              </p>

              <p className="font-extralight text-base sm:text-lg lg:text-2xl font-sans pb-8 fade-up">
                A daily selection of privately personalized reads no accounts or
                sign-ups required. This has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                standard dummy text.
              </p>

              <ul className="flex flex-wrap justify-center lg:justify-start gap-4 pb-6 fade-up">
                <li>
                  <button
                    type="button"
                    className="px-4 py-2 bg-textcolor border"
                  >
                    CSS
                  </button>
                </li>
                <li>
                  <button className="px-4 py-2 bg-textcolor border">
                    HTML
                  </button>
                </li>
                <li>
                  <button className="px-4 py-2 bg-textcolor border">
                    JAVASCRIPT
                  </button>
                </li>
              </ul>
              <Button onClick={props.onShowIt}>See project</Button>
            </div>
          </div>
        </div>
      </ScrollerAnime>
    </>
  );
};

export default MyRecentWork;
