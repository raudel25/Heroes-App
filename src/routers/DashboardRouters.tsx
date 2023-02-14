import { Navigate, Route, Routes } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroesScreen from "../components/heroes/HeroesScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

const DashboardRouters = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />}></Route>
          <Route path="/dc" element={<DcScreen />}></Route>
          <Route path="/search" element={<SearchScreen />}></Route>
          <Route path="/hero/:heroId" element={<HeroesScreen />}></Route>
          <Route
            path="*"
            element={<Navigate to="/marvel" replace></Navigate>}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default DashboardRouters;
