import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useGifFetch = (category) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      (async () => {
        const newImage = await getGifs(category);
        setImages(newImage);
      })();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return {
    images,
  };
};
