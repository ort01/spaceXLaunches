import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import FavouritesContext from "./Components/FavouriteLaunches/FavoritesContext";

import Footer from './Components/Footer';
import Header from "./Components/Header";
import Home from "./Components/Home";
import LaunchDetails from "./Components/LaunchDetails/LaunchDetails";
import ShowFavourites from "./Components/FavouriteLaunches/ShowFavourites";

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
        <div id="content-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<LaunchDetails />} />
            <Route path="/favourites" element={<ShowFavourites />} />
          </Routes>
        </div>
        <Footer />
      </FavouritesContext.Provider>
    </Router>
  )
}
