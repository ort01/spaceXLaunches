import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Footer from './Footer';
import Header from "./Header";
import Home from "./Home";
import LaunchDetails from "./LaunchDetails";



export default function App() {

  const [arrayOfFavourites, setListOfFavourites] = useState<number[]>([])

  function toggleFavourite(newItemID: number) {

    if (arrayOfFavourites.includes(newItemID)) {
      setListOfFavourites((prevItems) => {
        return prevItems.filter((itemID) => {
          return itemID != newItemID
        })
      })

    } else {
      setListOfFavourites((prevItems) => {
        return [...prevItems, newItemID]
      })
      
    }
    console.log(arrayOfFavourites);
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home toggle={toggleFavourite} favourites={arrayOfFavourites} />} />
        <Route path="/:id" element={<LaunchDetails toggle={toggleFavourite} favourites={arrayOfFavourites} />} />
      </Routes>
      <Footer />
    </Router>
  )
}
