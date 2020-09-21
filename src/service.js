import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const apiKey = "1f4b5b989a663bf0b64d94f3f143b1c3";
/*
- Originais Netflix
- Recomendados
- Em alta
- Ação
- Comedia
- Terror
- Romance
- Documentários
*/

const baseFetch = async (endPoint) => {
  return api
    .get(endPoint)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default {
  getHomeList: async () => {
    return [
      {
        section: "originals",
        title: "Originais do Netflix",
        item: await baseFetch(
          `/discover/tv?with_network=213&api_key=${apiKey}&language=pt-BR`
        ),
      },
      {
        section: "trending",
        title: "Recomendado para Você",
        item: await baseFetch(
          `/trending/all/week?&api_key=${apiKey}&language=pt-BR`
        ),
      },
      {
        section: "topRated",
        title: "Em alta",
        item: await baseFetch(
          `/movie/top_rated?&api_key=${apiKey}&language=pt-BR`
        ),
      },
      {
        section: "action",
        title: "Ação",
        item: await baseFetch(
          `/discover/movie?with_genres=28&api_key=${apiKey}&language=pt-BR`
        ),
      },
      {
        section: "comedy",
        title: "Comédia",
        item: await baseFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        section: "horror",
        title: "Horror",
        item: await baseFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        section: "romance",
        title: "Romance",
        item: await baseFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        section: "documentary",
        title: "Documentário",
        item: await baseFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await baseFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${apiKey}`
          );
          break;
        case "tv":
          info = await baseFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${apiKey}`
          );
          break;
        default:
          console.log("Não tem nada");
      }
    }
    return info;
  },
};
