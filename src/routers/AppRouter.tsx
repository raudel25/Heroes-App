import { HashRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRouters from "./DashboardRouters";
import PrivateRoutes from "./PrivateRoutes";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <HashRouter>
      <div>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoutes
                isAuthenticated={user.logged}
                component={LoginScreen}
              />
            }
          ></Route>
          <Route
            path="*"
            element={
              <PrivateRoutes
                isAuthenticated={user.logged}
                component={DashboardRouters}
              />
            }
          ></Route>
        </Routes>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
