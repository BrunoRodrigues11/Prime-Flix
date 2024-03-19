import "./header.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

function Header() {
  // Estado para controlar se a página atual é de favoritos
  const [isFavoritesPage, setIsFavoritesPage] = useState(false);

  // Use useLocation do react-router-dom para obter a localização atual
  const location = useLocation();

  // Verifica se a página atual é de favoritos
  React.useEffect(() => {
    setIsFavoritesPage(location.pathname === "/favoritos");
  }, [location]);

  return (
    <header>
      <Link className="logo" to="/">
        Prime Flix
      </Link>
      <div className="menu">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Início
        </Link>
        <Link
          to="/series"
          className={location.pathname === "/series" ? "active" : ""}
        >
          Séries
        </Link>
        <Link
          to="/filmes"
          className={location.pathname === "/filmes" ? "active" : ""}
        >
          Filmes
        </Link>
      </div>
      <div className="menu-opcoes">
        {/* Renderiza o ícone de bookmark condicionalmente com base na página atual */}
        <Link className="favoritos" to="/favoritos">
          {isFavoritesPage ? (
            <BsBookmarkFill className="icone" />
          ) : (
            <BsBookmark className="icone" />
          )}
        </Link>
        <div className="profile">
          <img
            src="https://images.cdn.prd.api.discomax.com/2023%2F4%2F25%2F50ab798c-1ab4-4f37-9a69-ffac001659aa.png?w=32&f=webp"
            alt="Profile"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
