import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRouters from "./DashboardRouters";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="*" element={<DashboardRouters />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
