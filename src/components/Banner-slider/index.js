import "./banner-slider.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegPlayCircle } from "react-icons/fa";

function BannerSlider(filmes_list) {
  return (
    <div className="banner-filmes">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        style={{ maxWidth: "100%", height: "100vh" }}
      >
        {filmes_list.filmes_list.map((filme) => {
          return (
            <SwiperSlide key={filme.id}>
              <article className="banner-filmes-item">
                <div className="banner-filmes-tittle">
                  <h1>{filme.title}</h1>
                  <p>{filme.overview}</p>
                  <Link to={`/filme/${filme.id}`}>
                    <button>
                      <FaRegPlayCircle /> Assistir
                    </button>
                  </Link>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                  alt={filme.title}
                />
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
