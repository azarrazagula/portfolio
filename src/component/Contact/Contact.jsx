import React from "react";
import Button from "../UI/Reuseable/Button";
import Anime from "../UI/Reuseable/ScrollerAnime";

const Contact = (props) => {
  return (
    <>
      <Anime>
        <div className=" flex flex-col items-center min-h-screen gap-4 justify-center">
          <div>
            <p className=" text-4xl font-bold text-[#F55800] fade-up">
              get in touch.
            </p>
          </div>

          <form className="flex flex-col gap-4 w-96 mx-auto mt-6">
            <input
              type="text"
              placeholder="First Name"
              id="text"
              className="border p-3 text-black  rounded outline-none fade-up"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="text-black border p-3 rounded outline-none fade-up "
            />

            <input
              type="email"
              placeholder="Email address"
              className="text-black border p-3 rounded outline-none fade-up"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="text-black border p-3  rounded outline-none resize-none fade-up"
            ></textarea>
          </form>

          <Button
            type="submit"
            onClose={props.onClose}
            className="hover:bg-green-700 fade-up"
          >
            LOG IN
          </Button>
        </div>
      </Anime>
    </>
  );
};

export default Contact;
