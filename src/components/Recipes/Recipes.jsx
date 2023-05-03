import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import "./Recipes.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="section-title ">
      <div className="">
        <h1 className="py-5 text-center text-white">Here Is Our Worlds Finest Chefs Are Available</h1>
      </div>
      <div className="recipes-chef">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
