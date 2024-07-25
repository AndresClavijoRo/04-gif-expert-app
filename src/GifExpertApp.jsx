import { useState } from "react";
import { AddCategory, GifGrid } from "./componentes";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategorie) => {
    if (categories.includes(newCategorie)) {
      return;
    }

    setCategories([newCategorie, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
