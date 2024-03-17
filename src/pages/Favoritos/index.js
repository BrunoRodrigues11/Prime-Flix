import { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso.");
  }

  return (
    <div className="meus-filmes">
      <div className="meus-filmes-tittle">
        <h1>Meus filmes</h1>
      </div>
      <div className="meus-filmes-content">
        {filmes.length === 0 && (
          <span>Você não possui nenhum filme salvo!</span>
        )}
        {filmes.map((filme) => {
          return (
            <div className="meus-filmes-item" key={filme.id}>
              <Link to={`/filme/${filme.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                  alt={filme.title}
                />
              </Link>
              <div> </div>
              <span>{filme.title}</span>
              <button onClick={() => excluirFilme(filme.id)}>Remover</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favoritos;
