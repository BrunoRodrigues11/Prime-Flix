import "./header.css";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Prime Flix
      </Link>
      <div className="menu">
        <Link to="/" className="active">
          Início
        </Link>
        <Link to="/">Séries</Link>
        <Link to="/">Filmes</Link>
      </div>
      <div className="menu-opcoes">
        <Link className="favoritos" to="/favoritos">
          <BsBookmark className="icone" />
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
