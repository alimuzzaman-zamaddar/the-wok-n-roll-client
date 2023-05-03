import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import './ChefeDetails.css'
import { FaThumbsUp} from "react-icons/fa";

const ChefeDetails = () => {
    const chefDetails = useLoaderData();
    const {name,photo,likes,recipes,discription,number,experience} = chefDetails;
    console.log(recipes)
    console.log(chefDetails)
    return (
        <div className='chef-page'>
            <h1 className='text-center'>Recipe Page</h1>
            <hr />
             
           <div className="chef-info text-center">
            <img src={photo} alt="" />
            <h3>{name}</h3>
            <p><strong>Number Of Recipes :</strong> {number}</p>
            <p><strong>Experience :</strong> {experience}</p>
            <p>{discription}</p>
            <p> <span> <FaThumbsUp></FaThumbsUp> </span> {likes} Likes</p>
           </div>
           <hr />


           <h1 className="text-center">Favorite Recipes </h1>

            <div className='three-recipes'>
            {
                recipes?.map(r => <RecipeDetails
                key={r.rating}
                r={r}
                ></RecipeDetails> )
             }

            </div> 

        </div>
    );
};

export default ChefeDetails;