import React from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";

const MovieDetail = (props) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} style={{ textAlign: "center", padding: "5rem" }}>
          <img
            alt="Movie Poster"
            src={
              props.poster
                ? "http://image.tmdb.org/t/p/w342/" + props.poster
                : "http://via.placeholder.com/200x300?text:No+Poster"
            }
            style={{ width: 350, borderRadius: 5 }}
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left", padding: "5rem 0" }}>
          <h1
            style={{
              fontWeight: "300",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {props.title}
          </h1>
          <h4 style={{ marginBottom: 20, textTransform: "uppercase" }}>
            {props.tagline}
          </h4>
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
          <div style={{ marginTop: "3rem" }}>
            <h4 style={{ textTransform: "uppercase" }}>Synopsis</h4>
            <div style={{ marginTop: 10, display: "flex" }}>
              <p style={{ fontWeight: 500 }}>{props.synopsis}</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetail;
