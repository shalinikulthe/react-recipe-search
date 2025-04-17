import React from "react";
import { NavLink } from "react-router-dom";

const MealCards = ({ detail }) => {
  return (
    <div className="meals">
      {!detail
        ? ""
        : detail.map((currElm) => {
            return (
              <div className="mealImg" key={currElm.idMeal}>
                <img src={currElm.strMealThumb} alt={currElm.strMeal} />
                <p>{currElm.strMeal}</p>
                <NavLink to={`/${currElm.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default MealCards;
