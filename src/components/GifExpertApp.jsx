import { useState } from "react";
import { AddCategory, GifGrid } from "../components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["bmw"]);

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      <div style={{ fontFamily: "cursive" }}>
        <h1 className="text-center">GifExpertApp</h1>
      </div>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
