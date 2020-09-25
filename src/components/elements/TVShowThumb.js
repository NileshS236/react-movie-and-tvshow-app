import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

class MovieThumb extends React.Component {
  render() {
    const { image, movieId, clickable } = this.props;
    return (
      <StyledMovieThumb>
        {clickable ? (
          <div>
            <Link to={`/tvshows/${movieId}`}>
              <img className="animated" src={image} alt="movie-thumb" />
            </Link>
          </div>
        ) : (
          <img src={image} alt="movie-thumb" />
        )}
      </StyledMovieThumb>
    );
  }
}

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default MovieThumb;
