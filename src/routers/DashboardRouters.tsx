import { Route, Routes } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroesScreen from "../components/heroes/HeroesScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";

const DashboardRouters = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/marvel" element={<MarvelScreen />}></Route>
        <Route path="/dc" element={<DcScreen />}></Route>
        <Route path="/heroe/:heroeId" element={<HeroesScreen />}></Route>
        <Route path="*" element={<MarvelScreen />}></Route>
      </Routes>
    </div>
  );
};

export default DashboardRouters;
