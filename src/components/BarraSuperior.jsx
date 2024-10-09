import { useRef, useContext } from "react";
import { MusicContext } from "../context/MusicContext";
import { searchDeezer } from "../services/deezerService";

const BarraSuperior = () => {
  const searchRef = useRef(null);

  const { songs, setSongs, currentSong, setCurrentSong, setShowContent } =
    useContext(MusicContext);

  const handleKeyUp = async (event) => {
    if (event.key === "Enter") {
      try {
        const res = await searchDeezer(searchRef.current.value);
        setSongs(res);
        setShowContent(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <header className="barra-superior">
      <div className="logo">
        <i className="fa-brands fa-spotify logo"></i>
      </div>
      <nav className="nav">
        <button className="btn-home" onClick={() => {setShowContent(true) }}>
          <i className="fa-solid fa-house"></i>
        </button>
        <input
          type="text"
          className="input-busqueda"
          placeholder="¿Qué quieres reproducir?"
          onKeyUp={handleKeyUp}
          ref={searchRef}
        />
      </nav>
      <div className="auth-buttons">
        <button className="btn-registrarse">Regístrate</button>
        <button className="btn-normal">Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default BarraSuperior;
