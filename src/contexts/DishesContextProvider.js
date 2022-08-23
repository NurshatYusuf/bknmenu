import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { ACTIONS, JSON_API_DISHES } from "../helpers/consts";
import { useLocation, useNavigate } from "react-router-dom";

export const dishesContext = createContext();

export const useDishes = () => useContext(dishesContext);

const INIT_STATE = {
    dishes: [],
    dishesDetails: null
};

const reducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.GET_DISHES:
            return {...state, dishes: action.payload};
        case ACTIONS.GET_DISHES_DETAILS:
            return {...state, dishes: action.payload};
        default:
            return state;
    }
};

const DishesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const navigate = useNavigate();
    const location = useLocation();

    // add dishes

    const addDishes = async (newDishes) => {
        await axios.post(JSON_API_DISHES, newDishes);
        getDishes();
    };

    // get all dishes

    const getDishes = async () => {
        const { data } = await axios(`${JSON_API_DISHES}/${window.location.search}`);
        dispatch({
            type: ACTIONS.GET_DISHES,
            payload: data
        });
    };

    // edit&details dishes

    const getDishesDetails = async (id) => {
        const { data } = await axios(`${JSON_API_DISHES}/${id}`);
        dispatch({
            type: ACTIONS.GET_DISHES_DETAILS,
            payload: data
        });
    };

    const saveEditedDishes = async (newDishes) => {
        await axios.patch(`${JSON_API_DISHES}/${newDishes.id}`, newDishes);
        getDishes();
    };

    // delete dishes

    const deleteDishes = async (id) => {
        await axios.delete(`${JSON_API_DISHES}/${id}`);
        getDishes();
    };

    const fetchByParams = (query, value) => {
        const search = new URLSearchParams(location.search);
        if (value === "all") {
            search.delete(query);
        } else {
            search.set(query, value);
        }
        const url = `${location.pathname}?${search.toString()}`;
        navigate(url);
    };

    const values = {
        dishes: state.dishes,
        dishesDetails: state.dishesDetails,
        getDishes,
        addDishes,
        getDishesDetails,
        saveEditedDishes,
        deleteDishes,
        fetchByParams
    };

    return (
        <dishesContext.Provider value={values}>{children}</dishesContext.Provider>
    );
};

export default DishesContextProvider;