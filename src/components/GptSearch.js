import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMAGE } from "../utilities/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute bg-fixed w-[screen] -z-10">
        <img src={BG_IMAGE} alt="bgImage" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
