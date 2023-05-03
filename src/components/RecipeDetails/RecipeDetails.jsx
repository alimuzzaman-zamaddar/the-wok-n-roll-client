import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetails = ({ r }) => {
  const [favorite, setFavorite] = useState(false)
    const notify = () =>{
      toast("Added To Favorite Recipe");
      setFavorite(!favorite)
    } 

  return (
    <div className="">
      <div className="p-3 bg-gradient m-3 rounded-2">
        <h3>{r.name}</h3>
        <div className="ms-3">
        <h4>Ingredients :</h4>
        <p>1 {r.ingredients[0]}</p>
        <p>2 {r.ingredients[1]}</p>
        <p>3 {r.ingredients[2]}</p>
        <p>4 {r.ingredients[3]}</p>
        <p>5 {r.ingredients[4]}</p>
        </div>
        <h4>Cooking Method </h4>
        <p>{r.method}</p>
        <div className="d-flex mb-3">
          <Rating  style={{ maxWidth: 150 }} value={r.rating} readOnly />
          <p className="mt-0 mb-0 ms-2">{r.rating}</p>
        </div>
        <div>
        <button onClick={notify}  disabled={favorite}  className="btn btn-secondary text-white fs-5">Favorite</button>
        <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
