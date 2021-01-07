import React from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Skeleton from "@material-ui/lab/Skeleton";
import styled from "styled-components";

const DetailWrapper = styled.div`
  width: 80%;
  margin: 5rem auto;
`;

const MoviePoster = styled.img`
  height: 50rem;
  border-radius: 0.5rem;
`;
const PosterSkeleton = styled(Skeleton)`
  height: 50rem;
  width: 40rem;
  border-radius: 0.5rem;
`;

const MovieDesc = styled(Grid)`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: justify;
`;

const MovieTitle = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const MovieDetail = (props) => {
  return (
    <DetailWrapper>
      <Grid container style={{display:"flex", justifyContent:"center",width:"100%"}}>
        <Grid
          item
          md={6}
          sm={12}
        >
          {!props.Loading ? (
            <MoviePoster
              alt="Movie Poster"
              src={
                props.poster
                  ? "http://image.tmdb.org/t/p/w342/" + props.poster
                  : "http://via.placeholder.com/200x300?text:No+Poster"
              }
            />
          ) : (
            <PosterSkeleton variant="rect" />
          )}
        </Grid>
        <MovieDesc item md={6} sm={12}>
          <MovieTitle>
            {!props.Loading ? props.title : <Skeleton variant="text" />}
          </MovieTitle>
          <h4 style={{ marginBottom: 20, textTransform: "uppercase" }}>
            {!props.Loading ? props.tagline : <Skeleton variant="text" />}
          </h4>
          {!props.Loading ? (
            <div style={{ display: "flex" }}>
              <Rating
                value={parseFloat(props.rate)}
                max={10}
                precision={0.1}
                readOnly
                style={{ marginRight: 20 }}
              />
              <p style={{ fontWeight: 700,fontSize:"1.4rem" }}>{props.rate}</p>
            </div>
          ) : (
            <Skeleton variant="rect" style={{ borderRadius: 5 }} />
          )}

          {!props.Loading ? (
            <div style={{ marginTop: "3rem" }}>
              <h4 style={{ textTransform: "uppercase" }}>Genres</h4>
              <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap" }}>
                {props.genres.map((genre, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontWeight: 500,
                      textTransform: "uppercase",
                      marginRight: 20,
                      fontSize: "1.4rem",
                      lineHeight:"3rem"
                    }}
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <Skeleton
              variant="rect"
              height={50}
              style={{ marginTop: "3rem", borderRadius: 5 }}
            />
          )}

          {!props.Loading ? (
            <div style={{ marginTop: "3rem" }}>
              <h4 style={{ textTransform: "uppercase" }}>Synopsis</h4>
              <div style={{ marginTop: 10, display: "flex" }}>
                <p style={{ fontWeight: 500, fontSize:"1.4rem" }}>{props.synopsis}</p>
              </div>
            </div>
          ) : (
            <Skeleton
              variant="rect"
              height={100}
              style={{ marginTop: "3rem", borderRadius: 5 }}
            />
          )}
        </MovieDesc>
      </Grid>
    </DetailWrapper>
  );
};

export default MovieDetail;
