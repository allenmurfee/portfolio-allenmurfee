import Contact from "../components/Contact";
import Work from "../components/Work";
import Recommendations from "../components/Recommendations";
import Education from "../components/Education";
import HomeInfo from "../components/HomeInfo";
import Photos from "../components/Photos";
import Projects from "../components/Projects";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

const useHome = () => {
  useEffect(() => {
    document.title = "Allen Murfee | Software Developer";
  }, []);

  return (
    <div className="bg-zinc-700">
      <div className="relative flex flex-col md:flex-row justify-between mt-5">
        <HomeInfo />
        <div className="flex-item self-center w-2/3 md:w-1/3 md:m-auto mt-5 mb-5 md:mb-10 border-0 md:rounded-3xl">
          <Photos
            className-=""
            pic={`${import.meta.env.VITE_BASE_URL}allen_and_caitlin.png`}
            alt={"allen and caitlin"}
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row md:justify-between md:mt-8">
        <Work />
        <Contact />
      </div>
      <div className="relative flex flex-col md:flex-row justify-between mt-14">
        <Recommendations />
        <Education />
      </div>
      <div className="mt-10">
        <Projects />
      </div>
    </div>
  );
};

export default useHome;
