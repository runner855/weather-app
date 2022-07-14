import React from "react";
import moment from "moment";
import "../styles/ForecastDetails.css";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  const { date } = forecast;

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
  }).isRequired,
};
