import React from "react";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PosterWrapper = styled.div`
  text-align: center;
  transition: all 0.4s;
  overflow: hidden;
  &:hover {
    transform: translateY(-1rem);
    overflow: hidden;
  }
`;

const Poster = (props) => {
  return (
    <PosterWrapper>
      <Link to={"/movie/" + props.id}>
        <img
          src={
            props.poster
              ? "http://image.tmdb.org/t/p/w342/" + props.poster
              : "http://via.placeholder.com/200x300?text:No+Poster"
          }
          alt={props.id}
          style={{ height: 300, objectFit: "cover", borderRadius: 5 }}
        />
        <h4 style={{ margin: ".5rem 0", fontWeight: "400", color: "black" }}>
          {props.title}
        </h4>
        <Rating
          defaultValue={(props.rate / 10) * 5}
          max={5}
          precision={0.1}
          readOnly
        />
      </Link>
    </PosterWrapper>
  );
};

export default Poster;
