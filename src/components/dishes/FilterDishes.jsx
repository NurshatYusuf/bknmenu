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
          id="bread"
          value="bread"
        />
        <label htmlFor="bread">Bread</label>
      </div>
      <div className="fil__block">
        <input
          className="fil__inp"
          name="category"
          type="radio"
          id="Vegetables + Cheese"
          value="Vegetables + Cheese"
        />
        <label htmlFor="Vegetables + Cheese">Vegetables + Cheese</label>
      </div>
      <div className="fil__block">
        <input
          className="fil__inp"
          name="category"
          type="radio"
          id="fish"
          value="fish"
        />
        <label htmlFor="fish">Fish</label>
      </div>
      <div className="fil__block">
        <input
          className="fil__inp"
          name="category"
          type="radio"
          id="meat"
          value="meat"
        />
        <label htmlFor="meat">Meat</label>
      </div>
      <div className="fil__block">
        <input
          className="fil__inp"
          name="category"
          type="radio"
          id="dessert"
          value="dessert"
        />
        <label htmlFor="dessert">Dessert</label>
      </div>
    </form>
  );
};

export default FilterDishes;
