import "./top-movies-slider.css";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopMoviesSlider(filmes_list) {
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
  return (
    <div className="lista-filmes">
      <div className="lista-filmes-tittle">
        <h1>TOP 10 </h1>
        <h3>
          FILMES <br /> DE HOJE
        </h3>
      </div>
      <div className="lista-filmes-content">
        <Slider {...settings}>
          {filmes_list.filmes_list.map((filme) => {
            ranking++;
            return (
              <div key={filme.id}>
                <article className="lista-filmes-item">
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
  );
}

export default TopMoviesSlider;
