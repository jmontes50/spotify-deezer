# Clon de Spotify usando la API de Deezer

Este proyecto es un clon de Spotify desarrollado con la API de Deezer, React y CSS puro. El objetivo es replicar algunas de las funcionalidades principales y el diseño de la plataforma de streaming de música de Spotify, utilizando la base de datos de música de Deezer para canciones, álbumes e información de artistas.

## Tecnologías Utilizadas

- **React**: La interfaz de usuario está construida con React, lo que permite un desarrollo basado en componentes y una gestión eficiente del estado.
- **API de Deezer**: Todos los datos de música, incluidos las canciones, portadas de álbumes e información de artistas, son obtenidos de la API de Deezer.
- **CSS Puro**: Los estilos personalizados están escritos en CSS para replicar la apariencia de Spotify, asegurando además que la interfaz sea responsiva y fácil de usar.

## Cómo Empezar

Para poner en funcionamiento el proyecto en tu máquina local:

1. Clona el repositorio:
   ```
   git clone https://github.com/jmontes50/spotify-deezer
   ```
2. Instala las dependencias necesarias:
   ```
   npm install
   ```
3. Configura las credenciales de la API de Deezer (si es necesario) en un archivo `.env`:
   ```
   VITE_KEY_DEEZER=tu_api_key
   ```
4. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

## Mejoras Futuras

- **Gestión de Playlists**: Agregar la posibilidad de que los usuarios creen y gestionen sus propias listas de reproducción.
- **Controles de Audio en Tiempo Real**: Ampliar el sistema de reproducción actual para incluir funciones como aleatorio, repetición y control de volumen con soporte en backend.
