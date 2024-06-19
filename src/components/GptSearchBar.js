import React from "react";
import lang from "../utilities/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black justify-centre grid grid-cols-12">
        <input
          className="m-3 p-3 col-span-10 rounded-md"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="px-4 py-2 my-3 mx-2 bg-red-600 rounded-md col-span-2 text-white"
          type="submit"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
