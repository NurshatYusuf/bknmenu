import React from "react";
import { useDishes } from "../../contexts/DishesContextProvider";
import "../../styles/components/filterDish.css";

const FilterDishes = () => {
  const { fetchByParams } = useDishes();

  return (
    <form
      className="filtration"
      onChange={(e) => fetchByParams("category", e.target.value)}
    >
      <div className="fil__block">
        <input
          className="fil__inp"
          name="category"
          type="radio"
          id="all"
          value="all"
        />
        <label htmlFor="all">All</label>
      </div>
      <div className="fil__block">
        <input
          className="fil__inp"
          name="category"
          type="radio"
          id="main"
          value="Main"
        />
        <label htmlFor="main">Main</label>
      </div>
      <div className="fil__block">
        <input
          className="fil__inp"
          name="category"
          type="radio"
          id="soup"
          value="Soup"
        />
        <label htmlFor="soup">Soup</label>
      </div>
      <div className="fil__block">
        <input
          className="fil__inp"
          name="category"
          type="radio"
          id="salad"
          value="Salad"
        />
        <label htmlFor="salad">Salad</label>
      </div>
      <div className="fil__block">
        <input
          className="fil__inp"
          name="category"
          type="radio"
          id="drinks"
          value="Drinks"
        />
        <label htmlFor="drinks">Drinks</label>
      </div>
    </form>
  );
};

export default FilterDishes;
