import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  return <h1>hello</h1>;
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
  }).isRequired,
};
