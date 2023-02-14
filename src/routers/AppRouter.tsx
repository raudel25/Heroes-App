import { HashRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRouters from "./DashboardRouters";

const AppRouter = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="*" element={<DashboardRouters />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
