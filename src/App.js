import React, { useEffect, useState } from "react";
import api from "./service";
import MovieRow from "./components/MovieRow/index";
import FeatureMovie from "./components/FeatureMovie/index";
import Header from "./components/Header/index";
import "./App.css";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureMovie, setFeatureMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.section === "originals");
      console.log(originals);
      let randomChosen = Math.floor(
        Math.random() * (originals[0].item.results.length - 1)
      );
      let chosenFilm = originals[0].item.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosenFilm.id, "tv");

      setFeatureMovie(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureMovie && <FeatureMovie feature={featureMovie} />}
      <div className="lists">
        {movieList.map((movie, key) => (
          <MovieRow key={key} title={movie.title} movies={movie.item} />
        ))}
      </div>
    </div>
  );
}
