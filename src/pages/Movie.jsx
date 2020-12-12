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
  const [Loading, setLoading] = useState(false);
  let { id } = useParams();
  // const recArray = JSON.stringify(Recommendation);
  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      window.scrollTo(0, 0);
      const res = await moviedb.get(`/movie/${id}`, {
        params: {},
      });
      const resRec = await moviedb.get(`/movie/${id}/recommendations`, {
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
      setRecommendation(resRec.data.results);
      setLoading(false);
      console.log(res.data)
      // (Recommendation && MovieData ? setLoading(false):setLoading(true));
    };
    fetchMovie();
  }, [id]);

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
          Loading={Loading}
        />
        <MovieList listOfMovies={Recommendation} searchRes="Recommended" Loading={Loading}/>
      </Container>
      <Footer />
    </div>
  );
};

export default Movie;
