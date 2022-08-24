import React, { useEffect } from "react";
import { useDishes } from "../../contexts/DishesContextProvider";
import { useNavigate } from "react-router-dom";
import "../../styles/components/dish_card.css";
// import AOS from "aos";

const DishCard = ({ item }) => {
  const { deleteDishes } = useDishes();
  const navigate = useNavigate();

  // useEffect(() => {
  //   AOS.init({
  //     duration: 3000,
  //   });
  // }, []);

  return (
    <div className="card">
      <div className="card__top">
        <h2 className="card__title">{item.name}</h2>
        <h2 className="card__title">{item.price} $</h2>
      </div>
      <div className="card__body">
        <p className="card__desc">{item.description}</p>
        <div className="card__btn-group">
          <button
            className="card__btn"
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            Edit
          </button>
          <button className="card__btn" onClick={() => deleteDishes(item.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
