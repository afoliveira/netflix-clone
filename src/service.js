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
    .get(`${endPoint}${apiKey}`)
    .then((res) => res.data)
    .then((err) => console.log(err));
};

export default {
  getHomeList: async () => {
    return [
      {
        section: "originals",
        title: "Originais do Netflix",
        item: await baseFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key${apiKey}`
        ),
      },
      {
        section: "trending",
        title: "Recomendado para Você",
        item: await baseFetch(
          `/trending/all/weeek?language=pt-BR&api_key${apiKey}`
        ),
      },
      {
        section: "topRated",
        title: "Em alta",
        item: await baseFetch(
          `/movie/top_rated?language=pt-BR&api_key${apiKey}`
        ),
      },
      {
        section: "action",
        title: "Ação",
        item: await baseFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key${apiKey}`
        ),
      },
      {
        section: "comedy",
        title: "Comédia",
        item: await baseFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key${apiKey}`
        ),
      },
      {
        section: "horror",
        title: "Horror",
        item: await baseFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key${apiKey}`
        ),
      },
      {
        section: "romance",
        title: "Romance",
        item: await baseFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key${apiKey}`
        ),
      },
      {
        section: "documentary",
        title: "Documentário",
        item: await baseFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key${apiKey}`
        ),
      },
    ];
  },
};
