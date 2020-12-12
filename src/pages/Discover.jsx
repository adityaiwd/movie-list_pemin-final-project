import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import MovieList from "../layout/MovieList";
import Footer from "../layout/Footer";
import moviedb from "../api/moviedb";

const Discover = () => {
  const [listOfImage, setListOfImage] = useState([]);
  const [Loading, setLoading] = useState(true);
  const imageArray = JSON.stringify(listOfImage);
  useEffect(() => {
    const fetchImage = async () => {
      const res = await moviedb.get(`/discover/movie`, {
        params: {},
      });
      setListOfImage(res.data.results);
      setLoading(false);
    };
    fetchImage();
  }, [imageArray]);
  return (
    <div style={{ position: "relative" }}>
      <Navigation />
      <div style={{ padding: "7rem 20rem" }}>
        <MovieList listOfMovies={listOfImage} Loading={Loading} />
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
