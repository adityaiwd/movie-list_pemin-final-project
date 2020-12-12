import React from "react";
import Navigation from "../components/Navigation";
import MovieList from "../layout/MovieList";
import Footer from "../layout/Footer";

const Discover = () => {
  
  return (
    <div style={{position:"relative"}}>
      <Navigation />
      <div style={{ padding: "7rem 20rem" }}>
        <MovieList />
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
