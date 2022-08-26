import React, { useEffect, useState } from "react";
import { useDishes } from "../../contexts/DishesContextProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import DishCard from "./DishCard";
import AOS from "aos";
import FilterDishes from "./FilterDishes";

import "../../styles/DishesList.css";
import {Pagination} from "@mui/material";

const DishesList = () => {
  const { dishes, getDishes, deleteDishes } = useDishes();
  const navigate = useNavigate();

  useEffect(() => {
    getDishes();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getDishes();
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [page, setPage] = useState(1);
  const itemsOnPage = 6;
  const count = Math.ceil(dishes.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return dishes.slice(begin, end);
  }

  return (
    <div className="list-container" data-aos="fade-up" data-aos-duration="2000">
      <div className="list__title">
        <h1>PLATOS DELICIOS</h1>
      </div>
      <div className="list-content__top">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="dish-list__inp"
        />
        <button className="d-list__btn" onClick={() => navigate("/add")}>
          Add Dish
        </button>
        <FilterDishes />
      </div>
      <div className="dishes-list">
        {dishes ? (currentData().map((item) => <DishCard item={item} key={item.id} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <Pagination count={count} page={page} onChange={handlePage} />
    </div>
  );
};

export default DishesList;
