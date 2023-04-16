import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useGifFetch = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
    setInterval(setIsLoading, 1000);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
