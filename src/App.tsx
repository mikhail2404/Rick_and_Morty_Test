import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters/Characters";
import MyWatchList from "./pages/WatchList/MyWatchList";
import InitFilters from "./components/Filters/InitFilters";
import './scss/styles.scss'
import NavBar from "./components/NavBar/NavBar";
import OverlayWithSpinner from "./components/Overlay/OverlaySpiner";

const App: React.FC = () => {


  return (
    <div className="app__container">
      <Router>
        <OverlayWithSpinner />
        <NavBar />
        <InitFilters />
        <div className="content">
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/my-watch-list" element={<MyWatchList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
