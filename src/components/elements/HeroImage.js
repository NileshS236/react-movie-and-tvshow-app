import React from "react";
import PropTypes from "prop-types";
import { StyledHeroImage } from "../styles/StyledHeroImage";

class HeroImage extends React.Component {
  render() {
    const { image, title, overview } = this.props;
    return (
      <StyledHeroImage image={image}>
        <div className="heroImage-content">
          <div className="heroImage-overview">
            <h1>{title}</h1>
            <p>{overview}</p>
          </div>
        </div>
      </StyledHeroImage>
    );
  }
}

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
