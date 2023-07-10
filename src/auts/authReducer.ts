import types from "../types/types";

const authReducer = (_ = {}, action: { type: string; name: string }) => {
  switch (action.type) {
    case types.login:
      return {
        name: action.name,
        logged: true,
      };

    default:
      return {
        name: "",
        logged: true,
      };
  }
};

export default authReducer;
