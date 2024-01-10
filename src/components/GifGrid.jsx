import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { Images, isloading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isloading && <h2>Cargando...</h2>}

      <div>
        {Images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
