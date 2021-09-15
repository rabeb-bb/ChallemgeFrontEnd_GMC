import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Drink.css";

const Drink = ({ match }) => {
  const [meal, setMeal] = useState({});
  const [load, setLoad] = useState(false);
  const [isError, setisEerror] = useState(false);

  const mealKeys = Object.keys(meal);
  const ingredients = mealKeys.filter((el) => el.includes("ingredient"));

  console.log(ingredients);
  const getMeal = async () => {
    try {
      setLoad(true);
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
      );
      setMeal(response.data.meals[0]);
      setLoad(false);
    } catch (error) {
      setisEerror(true);

      setLoad(false);
    }
  };

  useEffect(() => {
    getMeal();
  }, [match.params.id]);

  console.log(match.params.id);
  console.log(meal);

  return (
    <div className="meal">
      <div className="intro">
        <img src={meal.strMealThumb} />

        <div className="info">
          <h2>{meal.strMeal}</h2>
          <div className="recipeTags">
            <h3>Origin: {meal.strArea}</h3>
            <h3>Category: {meal.strCategory}</h3>
          </div>
        </div>
      </div>
      <div className="recipe">
        <div className="ingredients">
          <h3>Ingredients:</h3>
          {meal.strIngredient1 ? (
            <p>
              <span className="measure">{meal.strMeasure1}</span> :{" "}
              <span>{meal.strIngredient1}</span>
            </p>
          ) : null}
          {meal.strIngredient2 ? (
            <p>
              <span className="measure">{meal.strMeasure2}</span> :{" "}
              <span>{meal.strIngredient2}</span>
            </p>
          ) : null}
          {meal.strIngredient3 ? (
            <p>
              <span className="measure">{meal.strMeasure3}</span> :{" "}
              <span>{meal.strIngredient3}</span>
            </p>
          ) : null}
          {meal.strIngredient4 ? (
            <p>
              <span className="measure">{meal.strMeasure4}</span> :{" "}
              <span>{meal.strIngredient4}</span>
            </p>
          ) : null}
          {meal.strIngredient5 ? (
            <p>
              <span className="measure">{meal.strMeasure5}</span> :{" "}
              <span>{meal.strIngredient5}</span>
            </p>
          ) : null}
          {meal.strIngredient6 ? (
            <p>
              <span className="measure">{meal.strMeasure6}</span> :{" "}
              <span>{meal.strIngredient6}</span>
            </p>
          ) : null}
          {meal.strIngredient7 ? (
            <p>
              <span className="measure">{meal.strMeasure7}</span> :{" "}
              <span>{meal.strIngredient7}</span>
            </p>
          ) : null}
          {meal.strIngredient8 ? (
            <p>
              <span className="measure">{meal.strMeasure8}</span> :{" "}
              <span>{meal.strIngredient8}</span>
            </p>
          ) : null}
          {meal.strIngredient9 ? (
            <p>
              <span className="measure">{meal.strMeasure9}</span> :{" "}
              <span>{meal.strIngredient9}</span>
            </p>
          ) : null}
          {meal.strIngredient10 ? (
            <p>
              <span className="measure">{meal.strMeasure10}</span> :{" "}
              <span>{meal.strIngredient10}</span>
            </p>
          ) : null}
          {meal.strIngredient11 ? (
            <p>
              <span className="measure">{meal.strMeasure11}</span> :{" "}
              <span>{meal.strIngredient11}</span>
            </p>
          ) : null}
          {meal.strIngredient12 ? (
            <p>
              <span className="measure">{meal.strMeasure12}</span> :{" "}
              <span>{meal.strIngredient12}</span>
            </p>
          ) : null}
        </div>
        <div className="instructions">
          <p>{meal.strInstructions}</p>
          {/* <iframe width="560" 
                height="315" 
                src={meal.strYoutube}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe> */}
          <a href={meal.strYoutube} target="_blank">
            click here to watch the video on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drink;
