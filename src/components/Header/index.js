import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Prime Flix
      </Link>
      <div className="menu"> 
        <Link to="/">Início</Link>
        <Link to="/">Séries</Link>
        <Link to="/">Filmes</Link>
      </div>
      <Link className="favoritos" to="/favoritos">
        Favoritos
      </Link>
    </header>
  );
}

export default Header;
