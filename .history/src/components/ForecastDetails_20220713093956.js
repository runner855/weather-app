import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = (props) => {
  const { date } = props;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{`${date}`}</div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,

};
