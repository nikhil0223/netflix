import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%] absolute md:pt-[15%] pl-6 md:pl-12 w-[100%] aspect-video text-white bg bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block w-[32rem] py-4 text-lg">{overview}</p>
      <div className="my-2 md:my-0">
        <button className="w-[5rem] md:w-[8rem] bg-white text-black md:p-4 md:px-0 p-2   rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block w-[8rem] bg-white text-black p-4 px-0 mx-2 rounded-lg hover:bg-opacity-80">
          {/* 🛈  */}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
