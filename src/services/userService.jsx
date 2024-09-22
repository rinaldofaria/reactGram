import { requestConfig, buildUriAPI } from "../utils/config";

// get user details
const profile = async (data, token) => {
  const uriAPI = buildUriAPI("/users/profile");
  const config = requestConfig("GET", data, token);

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// update user details
const updateProfile = async (data, token) => {
  const uriAPI = buildUriAPI("/users/");
  const config = requestConfig("PUT", data, token, true);

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// get user details
const getUserDetails = async (id) => {
  const uriAPI = buildUriAPI(`/users/${id}`);
  const config = requestConfig("GET");

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  profile,
  updateProfile,
  getUserDetails,
};
export default userService;
