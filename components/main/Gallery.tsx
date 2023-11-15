import React from "react";
import GalleryCard from "../helper/GalleryCard";

const Gallery = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="gallery"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Gallery section
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <GalleryCard
          src="/1.jpg"
          title="2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <GalleryCard
          src="/2.jpg"
          title="2021"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <GalleryCard
          src="/3.jpg"
          title="2019"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Gallery;