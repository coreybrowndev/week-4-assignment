"use client";
import React, { useState } from "react";

interface GalleryProps {
  imgs: string[];
}

const Gallery = ({ imgs }: GalleryProps) => {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const img = imgs[currentImg];

  const handleCurrentImg = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dir = (e.target as HTMLButtonElement).innerHTML;
    console.log(dir);
    switch (dir) {
      case "Next":
        if (currentImg === imgs.length - 1) {
          setCurrentImg(0);
        } else {
          setCurrentImg(currentImg + 1);
        }
        break;
      case "Prev":
        if (currentImg === 0) {
          setCurrentImg(imgs.length - 1);
        } else {
          setCurrentImg(currentImg - 1);
        }
      default:
        return;
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <button onClick={(e) => handleCurrentImg(e)} className="text-[30px] pointer">
          Next
        </button>
        <button onClick={(e) => handleCurrentImg(e)} className="text-[30px] pointer">
          Prev
        </button>
      </div>
      <img src={img} width={500} height={500} alt="Picture of an item" />
    </div>
  );
};

export default Gallery;
