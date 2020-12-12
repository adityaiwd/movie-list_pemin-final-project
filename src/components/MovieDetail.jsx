import React from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Skeleton from "@material-ui/lab/Skeleton";

const MovieDetail = (props) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} style={{ textAlign: "center", padding: "5rem" }}>
          {!props.Loading ? (
            <img
              alt="Movie Poster"
              src={
                props.poster
                  ? "http://image.tmdb.org/t/p/w342/" + props.poster
                  : "http://via.placeholder.com/200x300?text:No+Poster"
              }
              style={{ width: 350, borderRadius: 5 }}
            />
          ) : (
            <Skeleton
              variant="rect"
              width={350}
              height={525}
              style={{ borderRadius: 5 }}
            />
          )}
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left", padding: "5rem 0" }}>
          <h1
            style={{
              fontWeight: "300",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {!props.Loading ? props.title : <Skeleton variant="text" />}
          </h1>
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
              <p style={{ fontWeight: 700 }}>{props.rate}</p>
            </div>
          ) : (
            <Skeleton variant="rect" style={{ borderRadius: 5 }} />
          )}

          {!props.Loading ? (
            <div style={{ marginTop: "3rem" }}>
              <h4 style={{ textTransform: "uppercase" }}>Genres</h4>
              <div style={{ marginTop: 10, display: "flex" }}>
                {props.genres.map((genre) => (
                  <p
                    style={{
                      fontWeight: 500,
                      textTransform: "uppercase",
                      marginRight: 20,
                    }}
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <Skeleton variant="rect" height={50} style={{ marginTop: "3rem", borderRadius: 5 }} />
          )}

          {!props.Loading ? (
            <div style={{ marginTop: "3rem" }}>
            <h4 style={{ textTransform: "uppercase" }}>Synopsis</h4>
            <div style={{ marginTop: 10, display: "flex" }}>
              <p style={{ fontWeight: 500 }}>{props.synopsis}</p>
            </div>
          </div>
          ) : (
            <Skeleton variant="rect" height={100} style={{ marginTop: "3rem", borderRadius: 5 }} />
          )}
          
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetail;
