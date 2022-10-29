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
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<LaunchDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}
