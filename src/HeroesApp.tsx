import AuthContext from "./auts/AuthContext";
import authReducer from "./auts/authReducer";
import AppRouter from "./routers/AppRouter";
import { useEffect, useReducer } from "react";

const init = () => {
  let user = localStorage.getItem("user") || "";
  if (user === "") return { name: "", logged: false };

  return JSON.parse(user);
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
