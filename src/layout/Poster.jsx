import React from "react";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PosterWrapper = styled.div`
  text-align: center;
  transition: all 0.2s;
  overflow: hidden;
  &:hover {
    transform: translateY(-9px);
    overflow: hidden;
  }
  &:active,&:focus{
    transform: translateY(-4px);
  }
`;

const PosterTitle = styled.h4`
   margin: 1rem 0; 
   font-weight: 500; 
   font-size: 1.4rem;
   color:#000;
`

const PosterImage = styled.img`
  width:80%;
  border-radius: .5rem;
`

const Poster = (props) => {
  return (
    <PosterWrapper>
      <Link to={"/movie/" + props.id}>
        <PosterImage
          src={
            props.poster
              ? "http://image.tmdb.org/t/p/w342/" + props.poster
              : "http://via.placeholder.com/200x300?text:No+Poster"
          }
          alt={props.id}
        />
        <PosterTitle>
          {props.title}
        </PosterTitle>
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
