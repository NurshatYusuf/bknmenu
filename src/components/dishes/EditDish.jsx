import React, { useState, useEffect } from "react";
import { useDishes } from "../../contexts/DishesContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditDish = () => {
    const { getDishesDetails, dishesDetails, saveEditedDishes } = useDishes();
    const navigate = useNavigate();
    const { id } = useParams();
    const [dish, setDish] = useState(dishesDetails);

    useEffect(() => {
        setDish(dishesDetails);
    }, [dishesDetails]);

    useEffect(() => {
        getDishesDetails(id);
    }, []);

    const handleInp = (e) => {
        if (e.target.name === "price") {
            let obj = {
                ...dish,
                [e.target.name]: Number(e.target.value)
            };
            setDish(obj);
        }  else {
            let obj = {
                ...dish,
                [e.target.name]: e.target.value
            };
            setDish(obj);
        }
    };

    return (
        <>
            {dish ? (
                <div>
                    <input type="text" value={dish.name} name="name" placeholder="Name" onChange={handleInp} />
                    <input type="text" value={dish.description} name="description" placeholder="Description" onChange={handleInp} />
                    <input type="text" value={dish.price} name="price" placeholder="Price" onChange={handleInp} />
                    <button onClick={() => {
                        saveEditedDishes(dish);
                        navigate("/");
                    }}>Save Changes</button>
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
        </>
    );
};

export default EditDish;