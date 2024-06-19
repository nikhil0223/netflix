import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMAGE } from "../utilities/constants";

const GptSearch = () => {
  return (
    <>
      <div className="absolute bg-fixed -z-10">
        <img className="h-screen object-cover md:h-[100%]" src={BG_IMAGE} alt="bgImage" />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
