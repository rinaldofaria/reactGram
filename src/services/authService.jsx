import { requestConfig, buildUriAPI } from "../utils/config";

// Register an user
const register = async (data) => {
  const uriAPI = buildUriAPI("/users/register");
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res._id) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log("error authService:", error.message);
    return { errors: error.message };
  }
};

// logout an user
const logout = () => {
  localStorage.removeItem("user");
};

// sign in an user
const login = async (data) => {
  const config = requestConfig("POST", data);
  const uriAPI = buildUriAPI("/users/login");

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res._id) {
      localStorage.setItem("user", JSON.stringify(res));
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
