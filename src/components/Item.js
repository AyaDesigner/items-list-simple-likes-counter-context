import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';


const Item = ({ item }) => {

    const [favoritesCounter, setFavoritesCounter] = useState(0);
    const appContext = useContext(AppContext);
    const incTotalFavorites = appContext.incTotalFavorites;
    const decTotalFavorites = appContext.decTotalFavorites
    const [addedToFavorites, setAddedToFavorites] = useState(false);



    const addToFavorites = () => {
        setAddedToFavorites(true);
        if(addedToFavorites && favoritesCounter > 0){
            removeFromFavorites();
        }
        else{
            setFavoritesCounter(favoritesCounter + 1);
            incTotalFavorites();
        }
        

    }

    const removeFromFavorites = () => {      
            setFavoritesCounter(favoritesCounter - 1);
            decTotalFavorites();       
    }

    return (
        <div>
            <img src={item.cover_image_url} alt="Item" width="200"></img>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div>
                <button onClick={addToFavorites}>Add to favorites {favoritesCounter}</button>
            </div>
               

        </div>
    );
}

export default Item;