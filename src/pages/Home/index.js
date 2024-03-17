import { useEffect, useState } from "react";
import api from "../../services/api";

import BannerSlider from "../../components/Banner-slider";
import TopMoviesSlider from "../../components/Top-movies-slider";
import "./home.css";

// URL DA API = /movie/now_playing?api_key=1f63b1c19e27b028d0a70d1cd9f90fc6&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "1f63b1c19e27b028d0a70d1cd9f90fc6",
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <BannerSlider filmes_list={filmes} />
      <TopMoviesSlider filmes_list={filmes} />
    </div>
  );
}

export default Home;
