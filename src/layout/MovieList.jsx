import React, { useState, useEffect } from "react";
import moviedb from "../api/moviedb";
import Poster from "../components/poster";
import Skeleton from "@material-ui/lab/Skeleton";

const MovieList = (props) => {
  const [listOfImage, setListOfImage] = useState([]);
  const [Loading, setLoading] = useState(false);
  const imageArray = JSON.stringify(listOfImage);
  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      const res = await moviedb.get(`/discover/movie`, {
        params: {},
      });
      setListOfImage(res.data.results);
      setLoading(false);
    };
    setLoading(true);
    fetchImage();
  }, [imageArray]);
  return (
    <div>
      <div>
        <h1 style={{ fontWeight: "300", textTransform: "uppercase" }}>
          {!props.searchRes ? "POPULAR" : (props.searchRes === "Recommended" ? "Recommended" : props.searchRes)}
        </h1>
        <h4 style={{ textTransform: "uppercase" }}>
          {!props.searchRes || (props.searchRes === "Recommended")  ? "MOVIES" : "Search Results"}
        </h4>
      </div>
      <div style={{ marginTop: "2rem",position:"relative" }} className="ui stackable four column grid">
        {!Loading ? (
          (props.searchRes ? props.searchedMovie : listOfImage).map((image) => (
            <div className="column" key={image.id}>
              <Poster                
                poster={image.poster_path}
                id={image.id}
                title={image.title}
                rate={image.vote_average}
              />
            </div>
          ))
        ) : (
          [...Array(20)].map((image) => (
            <div className="column" style={{position:"relative"}}>
            <div style={{margin:"0 4.1rem"}}>
              <Skeleton animation="pulse" variant="rect" width={200} height={300} style={{borderRadius:5}}/>
              <Skeleton animation="pulse" variant="text"  style={{borderRadius:5}}/>
              <Skeleton animation="pulse" variant="text"  style={{borderRadius:5}}/>
            </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
