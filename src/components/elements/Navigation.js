import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { StyledNavigation } from "../styles/StyledNavigation";

const Navigation = ({ movieName, tvshowName, isTV }) => {
  return (
    <StyledNavigation>
      <div className="navigation-content">
        <Link to={!isTV ? "/" : "/tvshows"}>
          <p>Home</p>
        </Link>
        <p>|</p>
        <p>{!isTV ? movieName : tvshowName}</p>
      </div>
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  movieName: PropTypes.string,
};

export default Navigation;
