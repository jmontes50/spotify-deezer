import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

const ListaCanciones = () => {
  const {
    songs,
    setSongs,
    currentSong,
    setCurrentSong,
    setShowContent,
    showContent,
    setIsPlaying
  } = useContext(MusicContext);

  const handleCurrentSong = (cancion) => {
    setCurrentSong(cancion);
    setIsPlaying(true);
  }

  return (
    <div className="lista-canciones">
      {songs.map((cancion) => (
        <div className="tarjeta-cancion" key={cancion.id} onClick={() => {handleCurrentSong(cancion)}}>
          <img
            src={cancion.album.cover_medium}
            alt={`Cover de ${cancion.title}`}
            className="cover-cancion"
          />
          <div className="info-cancion">
            <h4 className="nombre-cancion">{cancion.title}</h4>
            <p className="artista-cancion">{cancion.artist.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaCanciones;
