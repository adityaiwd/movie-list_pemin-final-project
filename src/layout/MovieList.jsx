import React from "react";
import Poster from "../components/Poster";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";

const MovieListWrapper = styled.div`
  padding: 10rem 0 15rem;
  width:70%;
  margin: 0 auto;
`

const ListTitle = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  font-size:2.5rem;
`

const ListSubtitle = styled.h4`
  font-weight: bold;
  text-transform: uppercase;
  font-size:1.6rem;
`
 

const MovieList = (props) => {
  return (
    <MovieListWrapper >
      <div>
        <ListTitle style={{ fontWeight: "300", textTransform: "uppercase" }}>
          {!props.searchRes ? "POPULAR" : (props.searchRes === "Recommended" ? "Recommended" : props.searchRes)}
        </ListTitle>
        <ListSubtitle>
          {!props.searchRes || (props.searchRes === "Recommended")  ? "MOVIES" : "Search Results"}
        </ListSubtitle>
      </div>
      <Grid container spacing={3} style={{marginTop:"3rem"}}>
        {!props.Loading ? (
          props.listOfMovies.map((image) => (
            <Grid key={image.id} item lg={3} md={4} sm={6}>
              <Poster
                key={image.id}                                
                poster={image.poster_path}
                id={image.id}
                title={image.title}
                rate={image.vote_average}
              />
            </Grid>
          ))
        ) : (
          [...Array(20)].map((_,idx) => (
            <Grid item key={idx} lg={3} md={4} sm={6}>
            <div style={{margin:"0 4.1rem"}}>
              <Skeleton animation="pulse" variant="rect" width={266} height={400} style={{borderRadius:5}}/>
              <Skeleton animation="pulse" variant="text"  style={{borderRadius:5}}/>
              <Skeleton animation="pulse" variant="text"  style={{borderRadius:5}}/>
            </div>
            </Grid>
          ))
        )}
      </Grid>
    </MovieListWrapper>
  );
};

export default MovieList;
