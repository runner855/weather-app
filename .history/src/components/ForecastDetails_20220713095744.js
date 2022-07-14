import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const ForecastDetails = (props) => {
  const { date, temperature, humidity, wind } = props;
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
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
  }),
};
