function BusquedasRecientes() {
  const artistas = [
    "Darude Sandstorm",
    "Darude Sandstorm",
    "Darude Sandstorm",
    "Darude Sandstorm",
    "Darude Sandstorm",
    "Darude Sandstorm",
  ];

  return (
    <section className="busquedas-recientes">
      <h2>Búsquedas recientes</h2>
      <div className="tarjetas-busqueda">
        {artistas.map((artista, index) => (
          <div className="tarjeta" key={index}>
            <img
              src={`./assets/main/Ellipse ${index + 4}.png`}
              alt="foto artista"
              className="ellipse-artista"
            />
            <h4 className="nombre-artista">{artista}</h4>
            <h5>Artista</h5>
            <img
              src="./assets/icons/close.svg"
              alt="icono cerrar"
              className="cerrar-artista"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BusquedasRecientes;
