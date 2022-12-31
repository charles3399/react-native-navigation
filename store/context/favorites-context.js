import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})

export default function FavoritesContextProvider({ children }) {
    const [favoriteMeals, setFavoriteMeals] = useState([])

    const addFavorites = (id) => {
        setFavoriteMeals((currentFave) => [...currentFave, id])
    }

    const removeFavorites = (id) => {
        setFavoriteMeals((currentFave) => currentFave.filter((item) => item !== id))
    }

    const value = {
        ids: favoriteMeals,
        addFavorite: addFavorites,
        removeFavorite: removeFavorites,
    }
    
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}