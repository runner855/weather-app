import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  const { date } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {`${date}`}
      </div>
    </div>
  )
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
  }).isRequired,
};
