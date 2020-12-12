import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import MovieList from "../layout/MovieList";
import moviedb from "../api/moviedb";
import Footer from "../layout/Footer";

const Search = ({ location }) => {
  const [Movies, setMovies] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    setSearchTerm(q ? q : "");
    const fetchImage = async () => {
      setLoading(true);
      window.scrollTo(0, 0);
      const res = await moviedb.get(`/search/movie`, {
        params: { query: q },
      });
      setMovies(res.data.results);
      setLoading(false);
    };
    fetchImage();
  }, [location.search]);

  return (
    <div style={{ position: "relative" }}>
      <Navigation />
      <div style={{ padding: "7rem 20rem" }}>
        <MovieList
          listOfMovies={Movies}
          searchRes={searchTerm}
          Loading={Loading}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
