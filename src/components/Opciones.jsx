const Opciones = () => {
  return (
    <aside className="opciones">
      <div className="opciones-principales">
        <h4>Tu Biblioteca</h4>
        <p className="texto-ayuda">
          Crea tu primera playlist. Es muy fácil, te vamos a ayudar.
        </p>
        <button className="btn-normal">Crear Playlist</button>
      </div>
      <div className="explorar-podcasts">
        <h4>Explorar Podcasts</h4>
        <p className="texto-ayuda">
          Busquemos algunos podcasts para seguir. Te mantendremos al tanto de
          los nuevos episodios.
        </p>
        <button className="btn-normal">Explorar Podcast</button>
      </div>
    </aside>
  );
};

export default Opciones;
