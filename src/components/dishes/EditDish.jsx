import React, { useState, useEffect } from "react";
import { useDishes } from "../../contexts/DishesContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/components/edit-dish.css";

const EditDish = () => {
<<<<<<< HEAD
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
    <>
      {dish ? (
        <div className="edit-container">
          <input
            type="text"
            value={dish.name}
            placeholder="Name"
            name="name"
            onChange={handleInp}
            className="edit__inp"
          />
          <input
            type="text"
            value={dish.description}
            placeholder="Description"
            name="description"
            onChange={handleInp}
            className="edit__inp"
          />
          <input
            type="text"
            value={dish.price}
            placeholder="Price"
            name="price"
            onChange={handleInp}
            className="edit__inp"
          />
          <div className="edit-container__btn">
            <button
              onClick={() => {
                saveEditedDishes(dish);
                navigate("/menu");
              }}
              className="edit__btn"
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
=======
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
        <>
            {dish ? (
                <div>
                    <input type="text" value={dish.name} placeholder="Name" name="name" onChange={handleInp} />
                    <input type="text" value={dish.description} placeholder="Description" name="description" onChange={handleInp} />
                    <input type="text" value={dish.price} placeholder="Price" name="price" onChange={handleInp} />
                    <button onClick={() => {
                        saveEditedDishes(dish);
                        navigate("/menu");
                    }}>Save Changes</button>
                </div>
                ) : (
                <h3>Loading...</h3>
            )}
        </>
    );
>>>>>>> 1272517c47d418840721f97fe3122bb7a016c9b1
};

export default EditDish;
