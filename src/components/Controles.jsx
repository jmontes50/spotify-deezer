import { useContext, useRef, useEffect } from "react";
import { MusicContext } from "../context/MusicContext";

const Controles = () => {
  const { currentSong, isPlaying, setIsPlaying } = useContext(MusicContext);

  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.preview;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong]);

  return (
    <div className="barra-reproduccion">
      <audio ref={audioRef} hidden />
      <div className="info-cancion-controles">
        {currentSong ? (
          <>
            <img
              src={currentSong.album.cover_small}
              alt={`Cover de ${currentSong.title}`}
              className="cover-cancion-controles"
            />
            <div className="detalle-cancion">
              <h4 className="nombre-cancion">{currentSong.title}</h4>
              <p className="artista-cancion">{currentSong.artist.name}</p>
            </div>
          </>
        ) : null}
      </div>

      <div className="controles-principales">
        <div className="controles-reproduccion">
          <i className="fa-solid fa-shuffle"></i>
          <i className="fa-solid fa-backward-step"></i>

          {isPlaying ? (
            <i
              className="fa-solid fa-pause-circle boton-play"
              onClick={togglePlayPause}
            ></i>
          ) : (
            <i
              className="fa-solid fa-play-circle boton-play"
              onClick={togglePlayPause}
            ></i>
          )}

          <i className="fa-solid fa-forward-step"></i>
          <i className="fa-solid fa-repeat"></i>
        </div>

        <div className="avance-reproduccion">
          <span className="tiempo-inicial">0:00</span>
          <input type="range" className="barra-progreso" value="30" max="100" />
          <span className="tiempo-final">3:45</span>
        </div>
      </div>

      <div className="volumen">
        <i className="fa-solid fa-volume-high"></i>
        <input type="range" className="control-volumen" value="50" max="100" />
      </div>
    </div>
  );
};

export default Controles;
