import React, { useState } from "react";
import MealCards from "./MealCards";

const MainPage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  const handleInput = (event) => {
    setSearch(event.target.value);
  };
  const FetchApi = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const res = await api.json();
    setData(res.meals);
  };

  return (
    <div className="container">
      <div className="serachBar">
        <input
          type="text"
          placeholder="Search your favorite recipe"
          onChange={handleInput}
        />
        <button onClick={FetchApi}>Serch</button>
      </div>
      <div>
        <MealCards detail={data} />
      </div>
    </div>
  );
};

export default MainPage;
