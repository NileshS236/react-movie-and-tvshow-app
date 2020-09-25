import React from "react";
import PropTypes from "prop-types";

import NoImage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import TVShowThumb from "./TVShowThumb";
import { StyledMovieInfo } from "../styles/StyledMovieInfo";

const TVInfo = ({ tvshow }) => {
  return (
    <StyledMovieInfo backdrop={tvshow.backdrop_path}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <TVShowThumb
            image={
              tvshow.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tvshow.poster_path}`
                : NoImage
            }
            clickable={false}
          />
        </div>
        <div className="movieinfo-text">
          <h1>{tvshow.name}</h1>
          <h3>PLOT</h3>
          <p>{tvshow.overview}</p>
          <div className="rating-director">
            <div>
              <h3>IMDB RATING</h3>
              <div className="score">{tvshow.vote_average}</div>
            </div>
          </div>
        </div>
      </div>
    </StyledMovieInfo>
  );
};

TVInfo.propTypes = {
  tvshow: PropTypes.object,
  directors: PropTypes.array,
};

export default TVInfo;
