import React from 'react'
import Rating from '@material-ui/lab/Rating';
import styled from "styled-components";

const PosterWrapper = styled.div`
    text-align: center;
    transition: all .3s;

    &:hover{
        transform: translateY(-1rem);
    }
`


const Poster = (props) => {
    return (
        <PosterWrapper className="column">
            <img
              src={"http://image.tmdb.org/t/p/w342/" + props.poster}
              alt={props.id}
              style={{height: 300 , objectFit: "cover", borderRadius:5 }}
            />
            <h4 >{props.title}</h4>
            <Rating defaultValue={(props.rate/10)*5} max={5} precision={0.1} readOnly/>
          </PosterWrapper>
    )
}

export default Poster;
