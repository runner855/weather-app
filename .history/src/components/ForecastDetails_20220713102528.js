import React from "react";
import moment from "moment";
import WeatherIcon from "react-icons-weather";
import PropTypes from "prop-types";

const ForecastDetails = (props) => {
  const { date, icon, temperature, description } = props;
  // const currentDate = moment(date).format(" ddd  Do MMM  ");

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{`${date}`}</div>
      <div className="forecast-details__icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-details__temperature">
        {`${temperature.max}`}
        &deg;C
      </div>
      <div className="forecast-details__description">{`${description}`}</div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
