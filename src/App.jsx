import React,{useState} from "react";
import Navigation from "./components/Navigation";
import PopularList from "./layout/PopularList";
import GlobalStyle from './theme/globalStyles';
import moviedb from "./api/moviedb";


const App = () => {
  const [Movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const onSearchSubmit = async (term) => {
    const res = await moviedb.get("/search/movie", {
      params: { query: term  },
    });
    setMovies(res.data.results);
    setSearchTerm(term)
  };
  return (
    <div >
    <GlobalStyle />
      <Navigation onSubmit={onSearchSubmit}/>
      <div style={{padding:"5rem 20rem"}}>
        <PopularList searchedMovie={Movies} searchRes={searchTerm}/>
      </div>
    </div>
  );
};

export default App;
