import React,{useState,useEffect} from 'react'
import Navigation from "../components/Navigation";
import MovieList from "../layout/MovieList";
import moviedb from "../api/moviedb";
import Footer from "../layout/Footer";

const Search = ({location}) => {
    const [Movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get('q')
         setSearchTerm(q ? q : '')
         const fetchImage = async () => {
            const res = await moviedb.get(`/search/movie`, {
              params: {query: searchTerm},
            });
            console.log(res.data.results);
            setMovies(res.data.results);
          };
          fetchImage();
    },[searchTerm , location])

    return (
      <div style={{position:"relative"}}>
        <Navigation  />
        <div style={{ padding: "7rem 20rem" }}>
          <MovieList searchedMovie={Movies} searchRes={searchTerm} />
        </div>
        <Footer />
      </div>
    );
}

export default Search;
