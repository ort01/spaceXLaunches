import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import FavouritesContext from "./FavoritesContext";

import Footer from './Footer';
import Header from "./Header";
import Home from "./Home";
import LaunchDetails from "./LaunchDetails";
import ShowFavourites from "./ShowFavourites";

export default function App() {


  const [arrayOfFavourites, setArrayOfFavorites] = useState<number[]>([])


  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites")
    if (storedFavorites){
      setArrayOfFavorites(JSON.parse(storedFavorites))
    }
  }, [])
  

  function toggleFavourite(newItemID: number) {

    var newArrayOfFavorites: number[]

    if (arrayOfFavourites.includes(newItemID)) {
      newArrayOfFavorites = arrayOfFavourites.filter((itemID) => {
        return itemID != newItemID
      })

    } else {
      newArrayOfFavorites = [...arrayOfFavourites, newItemID]
    }

    localStorage.setItem('favorites', JSON.stringify(newArrayOfFavorites))
    setArrayOfFavorites(newArrayOfFavorites)
  }

  // function toggleFavourite(newItemID: number) {

  //   if (arrayOfFavourites.includes(newItemID)) {
  //     setArrayOfFavorites((prevItems) => {
  //       return prevItems.filter((itemID) => {
  //         return itemID != newItemID
  //       })
  //     })

  //   } else {
  //     setArrayOfFavorites((prevItems) => {
  //       return [...prevItems, newItemID]
  //     })

  //   }
  // }

  return (
    <Router>
      <FavouritesContext.Provider value={[arrayOfFavourites, toggleFavourite]}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<LaunchDetails />} />
          <Route path="/favourites" element={<ShowFavourites />} />
        </Routes>
        <Footer />
      </FavouritesContext.Provider>
    </Router>
  )
}
