import React, { useEffect, useState, useContext } from 'react';
import Item from './Item';
import AppContext from '../context/AppContext';

const ItemsList = () => {

    const [items, setItems] = useState([]);
    const appContext = useContext(AppContext);
    const totalFavorites = appContext.totalFavorites;


    useEffect(() => {
        const apiUrl = `https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0`;
        fetch(apiUrl)
            .then((data) => data.json())
            .then((items) => {
                setItems(items);
                console.log(items);
            });
    }, []);

    // if (!items || items.length === 0) return <p>No items found</p>;

    return (
            
            <div>
                <h2>Total likes:{totalFavorites}</h2>
                {items.map((item) => <Item item={item}></Item>)}
            </div>
    );
}


export default ItemsList;