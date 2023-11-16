import React from "react";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN; // Corrected variable name

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN, // Corrected token usage
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.error(err);
    throw err; 
  }
};

function Api() {
  return <div>App</div>;
}

export default Api;
