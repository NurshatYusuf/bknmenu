import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDishes } from "../../contexts/DishesContextProvider";

const AddDish = () => {
    const { addDishes } = useDishes();
    const navigate = useNavigate();

    const [dish, setDish] = useState({
        name: "",
        description: "",
        price: ""
    });

    const handleInp = (e) => {
        if (e.target.value === "price") {
            let obj = {
                ...dish,
                [e.target.name]: Number(e.target.value)
            };
            setDish(obj);
        } else {
            let obj = {
                ...dish,
                [e.target.name]: e.target.value
            };
            setDish(obj)
        }
    };

    return (
        <div>
            <input type="text" name="name" placeholder="Name" onChange={handleInp} />
            <input type="text" name="description" placeholder="Description" onChange={handleInp} />
            <input type="text" name="price" placeholder="Price" onChange={handleInp} />
            <button onClick={() => {
                addDishes(dish);
                navigate("/menu");
            }}>Add Dish</button>
        </div>
    );
};

export default AddDish;