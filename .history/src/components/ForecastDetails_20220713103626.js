import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  const { date } = forecast;
  return <h1>hello</h1>;
  <div className="forecast-details__date">
    {`${date}`}
  </div>
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
  }).isRequired,
};
