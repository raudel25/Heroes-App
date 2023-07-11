import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import types from "../../types/types";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({
      type: types.login,
      name: "Raudel",
    });

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
