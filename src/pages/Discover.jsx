import React, { useState } from "react";
import Navigation from "../components/Navigation";
import MovieList from "../layout/MovieList";
import moviedb from "../api/moviedb";
import Footer from "../layout/Footer";

const Discover = () => {
  const [Movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchSubmit = async (term) => {
    const res = await moviedb.get("/search/movie", {
      params: { query: term },
    });
    setMovies(res.data.results);
    setSearchTerm(term);
  };
  return (
    <div style={{position:"relative"}}>
      <Navigation onSubmit={onSearchSubmit} />
      <div style={{ padding: "7rem 20rem" }}>
        <MovieList searchedMovie={Movies} searchRes={searchTerm} />
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
