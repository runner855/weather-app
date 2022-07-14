import React from "react";
import moment from "moment";
import WeatherIcon from "react-icons-weather";
import PropTypes from "prop-types";

const ForecastDetails = (props) => {
  console.log(props);
  const { date, icon, temperature, description } = props;
  const currentDate = moment(date).format(" ddd  Do MMM  ");

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{`${currentDate}`}</div>
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
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }).isRequired,
    })
  ).isRequired,
};
