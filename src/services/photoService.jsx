import { buildUriAPI, requestConfig } from "../utils/config";

// publish an user photo
const publishPhoto = async (data, token) => {
  const uriAPI = buildUriAPI("/photos");
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// get user photos
const getUserPhotos = async (id, token) => {
  const uriAPI = buildUriAPI(`/photos/user/${id}`);
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// delete a photo
const deletePhoto = async (id, token) => {
  const uriAPI = buildUriAPI(`/photos/${id}`);
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// update a photo
const updatePhoto = async (data, id, token) => {
  const uriAPI = buildUriAPI(`/photos/${id}`);
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// get photo by id
const getPhoto = async (id, token) => {
  const uriAPI = buildUriAPI(`/photos/${id}`);
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// like a photo
const like = async (id, token) => {
  const uriAPI = buildUriAPI(`/photos/like/${id}`);
  const config = requestConfig("PUT", null, token);

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// add comment to a photo
const comment = async (data, id, token) => {
  const uriAPI = buildUriAPI(`/photos/comment/${id}`);
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// get all photos
const getPhotos = async (token) => {
  const uriAPI = buildUriAPI("/photos");
  const config = requestConfig("GET", null, token);

  try {
    const res = fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// search photo by title
const searchPhotos = async (query, token) => {
  const uriAPI = buildUriAPI(`/photos/search?q=${query}`);
  const config = requestConfig("GET", null, token);

  try {
    const res = fetch(uriAPI, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const photoService = {
  publishPhoto,
  getUserPhotos,
  deletePhoto,
  updatePhoto,
  getPhoto,
  like,
  comment,
  getPhotos,
  searchPhotos,
};

export default photoService;
