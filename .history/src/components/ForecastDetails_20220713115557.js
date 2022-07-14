import React from "react";
import moment from "moment";
import "../styles/ForecastDetails.css";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;

  const currentDate = moment(date).format(" ddd  Do MMM  ");

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{`${currentDate}`}</div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
