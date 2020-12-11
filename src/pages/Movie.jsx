import React from "react";
import Navigation from "../components/Navigation";
import MovieList from "../layout/MovieList";
import moviedb from "../api/moviedb";
import Footer from "../layout/Footer";

const Movie = () => {
  return (
    <div>
      <Navigation />
      <Footer />
    </div>
  );
};

export default Movie;
