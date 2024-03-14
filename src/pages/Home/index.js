import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// URL DA API = /movie/now_playing?api_key=1f63b1c19e27b028d0a70d1cd9f90fc6&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  let ranking = 0;
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    variableHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

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
      <div className="lista-filmes">
        <div className="lista-filmes-tittle">
          <h1>TOP 10 </h1>
          <h3>
            FILMES <br /> DE HOJE
          </h3>
        </div>
        <div className="lista-filmes-content">
          <Slider {...settings}>
            {filmes.map((filme) => {
              ranking++;
              return (
                <div>
                  <article className="lista-filmes-item" key={filme.id}>
                    <h1>{ranking}</h1>
                    <Link to={`/filme/${filme.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                        alt={filme.title}
                      />
                    </Link>
                  </article>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
