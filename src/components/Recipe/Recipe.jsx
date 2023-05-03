import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Recipe.css";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const Recipe = ({ recipe }) => {
  const { id, name, details, photo, experience, likes, number } = recipe;

  return (
    <div className="chefCard">
      <LazyLoad 
        height={300} width={350} threshold={0.80}


       ><img variant="top" src={photo}></img></LazyLoad>
      <h3 className="mt-3">{name}</h3>
      <p>
        <strong>Experience :</strong> {experience}
      </p>
      <p>
        <strong>Number of Recipe :</strong> {number}
      </p>
      <p>
        <FaThumbsUp></FaThumbsUp> {likes} likes
      </p>
      <Link to={`/recipes/${id}`}>
        <Button className="btn btn-outline-info text-white" variant="">
          View Recipe
        </Button>
      </Link>
    </div>
  );
};

export default Recipe;
