import React from "react";
import PropTypes from "prop-types";
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

class Grid extends React.Component {
  render() {
    const { header, children } = this.props;
    return (
      <StyledGrid>
        <h1>{header}</h1>
        <StyledGridContent>{children}</StyledGridContent>
      </StyledGrid>
    );
  }
}

Grid.propTypes = {
  header: PropTypes.string,
};

export default Grid;
