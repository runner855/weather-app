import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = (props) => {
  const { date, temperature, humidity, wind } = props;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{`${date}`}</div>
      <div className="forecast-details__temperature-min">{`${temperature.min}`}</div>
      <div className="forecast-details__temperature-max">{`${temperature.max}`}</div>
      <div className="forecast-details__humidity">{`${humidity}`}</div>
      <div className="forecast-details__wind-speed">{`${wind.speed}`}</div>
      <div className="forecast-details__wind-direction">{`${wind.direction}`}</div>



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
