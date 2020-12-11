import React, { useState, useEffect } from "react";
import moviedb from "../api/moviedb";
import Poster from "../components/poster";

const PopularList = (props) => {
  const [listOfImage, setListOfImage] = useState([]);
  const imageArray = JSON.stringify(listOfImage);
  useEffect(() => {
    const fetchImage = async () => {
      const res = await moviedb.get(`/discover/movie`, {
        params: {},
      });
      console.log(res.data.results);
      setListOfImage(res.data.results);
    };
    fetchImage();
  }, [imageArray]);
  return (
    <div>
      <h1>{!props.searchRes ? "Popular Movies" : (props.searchRes+" Search Results")}</h1>
      <div
        style={{ marginTop: "2rem" }}
        class="ui relaxed stackable four column grid"
      >
      {(props.searchRes ? 
        props.searchedMovie : listOfImage).map((image) => (
          <Poster poster={image.poster_path} id={image.id} title={image.title} rate={image.vote_average}/>
        ))
      }
      </div>
    </div>
  );
};

export default PopularList;
