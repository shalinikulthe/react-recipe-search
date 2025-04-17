import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MealDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const jsonData = await get.json();
    console.log(jsonData.meals[0]);
    setInfo(jsonData.meals[0]);
  };
  if (info != "") {
    getInfo();
  }

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      {!info ? (
        "Data Not Found"
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} />
          <div className="info">
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Intruction's</h3>
            <p>{info.strInstructions}</p>
            <div className="goback-container">
              <button className="goback-btn" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealDetail;
