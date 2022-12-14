import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDishes } from "../../contexts/DishesContextProvider";
import "../../styles/components/add-dish.css";

const AddDish = () => {
  const { addDishes } = useDishes();
  const navigate = useNavigate();

  const [dish, setDish] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const handleInp = (e) => {
    if (e.target.value === "price") {
      let obj = {
        ...dish,
        [e.target.name]: Number(e.target.value),
      };
      setDish(obj);
    } else {
      let obj = {
        ...dish,
        [e.target.name]: e.target.value,
      };
      setDish(obj);
    }
  };

  return (
    <div className="add-container">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInp}
        className="add__inp"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleInp}
        className="add__inp"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleInp}
        className="add__inp"
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={handleInp}
        className="add__inp"
      />
      <div className="add-container__btn">
        <button
          onClick={() => {
            addDishes(dish);
            navigate("/menu");
          }}
          className="add__btn"
        >
          Add Dish
        </button>
      </div>
    </div>
  );
};

export default AddDish;
