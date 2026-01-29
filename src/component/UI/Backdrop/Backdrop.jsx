import React from "react";
import Drop from "../../../Assets/drop.webp";
import Icons from "../../../Assets/Vector.webp";
import Button from "../Reuseable/Button";
import Modal from "../../Modal/Modal";

const Backdrop = (props) => {
  return (
    <>
      {/* <div
        onClick={props.onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col justify-start p-4 pt-2 overflow-y-auto sm:justify-center sm:p-8 lg:justify-center lg:p-24"
      >
        {/* Modal Box */}
      {/* /* <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-textcolor rounded-lg w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-10"
        > */}

      <Modal onClose={props.onClose}>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <p className="font-bold text-3xl sm:text-5xl lg:text-8xl">
              Multi Post Stories
            </p>

            <button
              type="button"
              onClick={props.onClose}
              className="text-2xl sm:text-3xl lg:text-4xl text-gray-600"
            >
              X
            </button>
          </div>

          {/* Tags */}
          <ul className="flex flex-wrap gap-4 pb-6">
            <li>
              <button className="px-3 py-1 sm:px-4 sm:py-2 border">CSS</button>
            </li>
            <li>
              <button className="px-3 py-1 sm:px-4 sm:py-2 border">HTML</button>
            </li>
            <li>
              <button className="px-3 py-1 sm:px-4 sm:py-2 border">
                JAVASCRIPT
              </button>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              className="w-full max-h-64 sm:max-h-80 lg:max-h-full object-contain"
              src={Drop}
              alt="LOGOS"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 px-0 sm:px-4 lg:pr-20">
            <p className="font-heading text-base sm:text-lg lg:text-2xl pb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it 1960s.
            </p>

            <p className="font-heading text-base sm:text-lg lg:text-2xl pb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it 1960s with the releax map lapora verita.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 text-black">
              <Button
                onClick={props.onClose}
                className="bg-[#F55800] text-white"
              >
                See live
              </Button>
              <button
                onClick={props.onClose}
                className="flex items-center gap-2 bg-[#F55800] text-white px-4 py-2 rounded"
              >
                See source
                <img className="h-5" src={Icons} alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </Modal>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Backdrop;
