import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [Images, setImage] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImage(newImages);
    setIsloading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    Images,
    isloading,
  };
};
