import React from "react";
import moment from "moment";
import "../styles/ForecastDetails.css";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind, icon } = forecast;
  const windDirection = wind.direction.toUpperCase();

  const currentDate = moment(date).format(" ddd  Do MMM  ");

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{`${currentDate}`}</div>
      <div className="forecast-details__icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>

      <div className="forecast-details__temperature__min">
        {`Min Temperature: ${temperature.min}`}
        &deg;C
      </div>
      <div className="forecast-details__temperature__max">
        {`Max Temperature: ${temperature.max}`}
        &deg;C
      </div>
      <div className="forecast-details__humidity">{`Humidity: ${humidity}%`}</div>
      <div className="forecast-details__wind">{`Wind Speed: ${wind.speed}mph `}</div>
      <div className="forecast-details__wind">{`Wind Direction: ${windDirection} `}</div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    icon: PropTypes.string,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
