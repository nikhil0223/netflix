import React, { useRef } from "react";
import lang from "../utilities/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef("");

  const handleGptSearchClick =() => {
    
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="md:w-1/2 w-10/12 bg-black justify-centre grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="m-2 p-3 col-span-10 rounded-md mr-1 md:m-3 md:p-3"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="my-2 mx-1 md:px-4 md:py-2 md:my-3 md:mx-2 bg-red-600 rounded-md col-span-2 text-white"
          type="submit"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
