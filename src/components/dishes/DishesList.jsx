import React, {useEffect, useState} from "react";
import { useDishes } from "../../contexts/DishesContextProvider";
import {useNavigate, useSearchParams} from "react-router-dom";

const DishesList = () => {
    const { dishes, getDishes } = useDishes();
    const navigate = useNavigate();

    useEffect(() => {
        getDishes();
    }, []);

    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("q") || "");

    useEffect(() => {
        setSearchParams({
            q: search
        });
    }, [ search, ]);

    useEffect(() => {
        getDishes();
    }, [ searchParams, ]);

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
            {dishes ? (dishes.map(item => (
                <h3>
                    {item.name}, {item.description}, {item.price}
                    <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
                </h3>
            ))) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
};

export default DishesList;