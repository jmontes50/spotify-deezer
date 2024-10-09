import { useContext } from "react";
import { MusicContext } from "./context/MusicContext";
import Opciones from "./components/Opciones";
import BusquedasRecientes from "./components/BusquedasRecientes";
import ExplorarTodo from "./components/ExplorarTodo";
import Controles from "./components/Controles";
import BarraSuperior from "./components/BarraSuperior";
import ListaCanciones from "./components/ListaCanciones";

function App() {
  const {
    songs,
    setSongs,
    currentSong,
    setCurrentSong,
    setShowContent,
    showContent,
  } = useContext(MusicContext);
  return (
    <>
      <BarraSuperior />
      <div className="contenedor">
        <Opciones />
        <main>
          {/* <BusquedasRecientes /> */}
          {showContent ? <ExplorarTodo /> : <ListaCanciones />}
        </main>
      </div>
      <Controles />
    </>
  );
}

export default App;
