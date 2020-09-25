import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import { calcTime, convertMoney } from "../../helpers";

import { StyledMovieInfoBar } from "../styles/StyledMovieInfoBar";

const MovieInfoBar = ({
  time,
  budget,
  revenue,
  numOfEps,
  numOfSeas,
  status,
  isTV,
}) => {
  return (
    <StyledMovieInfoBar>
      <div className="movieinfobar-content">
        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <span className="movieinfobar-info">
            {!isTV
              ? `Running time: ${calcTime(time)}`
              : `Number Of Eps: ${numOfEps}`}
          </span>
        </div>

        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-budget" name="money" size="2x" />
          <span className="movieinfobar-info">
            {!isTV
              ? `Budget: ${convertMoney(budget)}`
              : `Number of Seasons: ${numOfSeas}`}
          </span>
        </div>

        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-revenue" name="ticket" size="2x" />
          <span className="movieinfobar-info">
            {!isTV ? `Revenue: ${convertMoney(revenue)}` : `Status: ${status}`}
          </span>
        </div>
      </div>
    </StyledMovieInfoBar>
  );
};

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
