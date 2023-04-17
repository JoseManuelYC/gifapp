import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Resident Evil"]);

  const onAddNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; //para que no sea la misma categoria
    setCategories([newCategory, ...categories]);
    /*  setCategories((cat)=> [...categories, "Valorant"]); */
    /* setCategories(categories.concat("valorant")); */
  };

  return (
    <div className="container">
      <h1>GifApp</h1>
      <AddCategory onNewCategory={onAddNewCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
