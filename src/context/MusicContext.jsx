import { useState, createContext } from "react";

const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MusicContext.Provider
      value={{
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        showContent,
        setShowContent,
        isPlaying,
        setIsPlaying
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicContextProvider };
