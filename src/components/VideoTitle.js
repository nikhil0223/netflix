import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-60 pl-12 w-[100%] aspect-video text-white bg bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-[32rem] py-6 text-lg">{overview}</p>
      <div className="">
        <button className="w-[8rem] bg-white text-black p-4 px-0  rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="w-[8rem] bg-white text-black p-4 px-0 mx-2 rounded-lg hover:bg-opacity-80">
          {/* 🛈  */}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
