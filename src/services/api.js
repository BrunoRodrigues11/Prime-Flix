import axios from "axios";

// BASE DA URL = https://api.themoviedb.org/3
// URL DA API = /movie/now_playing?api_key=1f63b1c19e27b028d0a70d1cd9f90fc6&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
