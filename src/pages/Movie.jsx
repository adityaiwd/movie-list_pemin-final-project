import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import MovieDetail from "../components/MovieDetail";
import moviedb from "../api/moviedb";
import Footer from "../layout/Footer";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import MovieList from "../layout/MovieList";

const Movie = () => {
  const [MovieData, setMovieData] = useState({
    poster: "",
    title: "",
    tagline: "",
    rate: "",
    genres: [],
    synopsis: "",
  });
  const [Recommendation, setRecommendation] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  let { id } = useParams();
  useEffect(() => {
    setSearchTerm(id ? id : "");
    const fetchMovie = async () => {
      const res = await moviedb.get(`/movie/${searchTerm}`, {
        params: {},
      });
      setMovieData({
        poster: res.data.poster_path,
        title: res.data.title,
        tagline: res.data.tagline,
        rate: res.data.vote_average,
        genres: res.data.genres,
        synopsis: res.data.overview,
      });
      console.log(res.data)
    };
    const fetchRecommendation = async () => {
      const res = await moviedb.get(`/movie/${searchTerm}/recommendations`, {
        params: {},
      });
      setRecommendation(res.data.results);
      setLoading(false);
    };
    fetchMovie();
    fetchRecommendation();
  }, [searchTerm, id]);

  return (
    <div style={{position:"relative"}}>
      <Navigation />
      <Container maxWidth="lg" style={{ paddingTop: "5rem", paddingBottom:"10rem" }}>
        <MovieDetail
          poster={MovieData.poster}
          title={MovieData.title}
          tagline={MovieData.tagline}
          rate={MovieData.rate}
          genres={MovieData.genres}
          synopsis={MovieData.synopsis}
        />
        <MovieList listOfMovies={Recommendation} searchRes="Recommended" Loading={Loading}/>
      </Container>
      <Footer />
    </div>
  );
};

export default Movie;
