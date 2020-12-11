import React, { useState, useEffect } from "react";
import moviedb from "../api/moviedb";
import Poster from "../components/poster";

const PopularList = () => {
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
      <h1>Popular Movies</h1>
      <div
        style={{ marginTop: "2rem" }}
        class="ui relaxed stackable five column grid"
      >
        {listOfImage.map((image) => (
          <Poster poster={image.poster_path} id={image.id} title={image.title} rate={image.vote_average}/>
        ))}
      </div>
    </div>
  );
};

export default PopularList;
